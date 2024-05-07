import fs from 'node:fs';
import path from 'node:path';
import type { PlopTypes } from '@turbo/gen';
import { getDirectories } from '@betahcoding/utils/common.util';

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation
export default function generator(plop: PlopTypes.NodePlopAPI): void {
  enum WorkspaceName {
    'Apps',
    'Packages',
  }

  interface InquirerDataType {
    name: string;
    workspaceName: string;
    appOrPackageName: string;
  }

  const workspaceNameArray = Object.values(WorkspaceName).filter((m) => isNaN(Number(m))) as unknown as string[];

  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator('react-component', {
    description: 'Adds a new react component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
      {
        type: 'list',
        name: 'workspaceName',
        message: 'Choose Workspace name: ',
        choices: workspaceNameArray,
      },
      {
        type: 'list',
        name: 'appOrPackageName',
        message: (data) => `Choose ${(data as InquirerDataType).workspaceName} name: `,
        choices: (data) => getDirectories((data as InquirerDataType).workspaceName),
      },
    ],
    actions: (data) => (data ? getActions(data as InquirerDataType) : []),
  });

  function getActions(data: InquirerDataType) {
    const { nestedRouteActions, root } = getNestedRouteActions(data);
    return nestedRouteActions.concat([
      {
        type: 'add',
        path: `${root}{{kebabCase name}}/index.ts`,
        template: `export * from "./{{kebabCase name}}";\n`,
      },
      {
        type: 'add',
        path: `${root}{{kebabCase name}}/{{kebabCase name}}.tsx`,
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'add',
        path: `${root}{{kebabCase name}}/{{kebabCase name}}.test.tsx`,
        templateFile: 'templates/component.test.hbs',
      },
      fs.existsSync(`${root}index.ts`)
        ? {
            type: 'append',
            path: `${root}index.ts`,
            pattern: /[;]/,
            template: 'export * from "./{{kebabCase name}}";',
          }
        : {
            type: 'add',
            path: `${root}index.ts`,
            template: `export * from "./{{kebabCase name}}";\n`,
          },
    ]);
  }

  function getNestedRouteActions(data: InquirerDataType) {
    const { name, workspaceName, appOrPackageName } = data;

    const specificDir =
      workspaceName.toLowerCase() === 'apps' ? `${appOrPackageName}/app/components/` : `${appOrPackageName}/src/`;
    const root = `${workspaceName}/${specificDir}`;
    const nestedRouteActions: PlopTypes.ActionType[] = [];

    /** Return early if no nested routes */
    if (!name.includes('/')) return { nestedRouteActions, root };

    const lastSlashInd = name.lastIndexOf('/') || name.lastIndexOf('\\');
    /** following is required to make sure appropreate name is used while creating components */
    data.name = name.slice(lastSlashInd + 1);

    const directories = name.slice(0, lastSlashInd).split(/\/|\\/);
    const rootSegments = [...root.split(/\/|\\/)];

    for (let i = 1; i <= directories.length; i++)
      updateIndexFilesIfNeeded(nestedRouteActions, rootSegments, directories.slice(0, i));

    return { nestedRouteActions, root: `${root + directories.join('/')}/` };
  }

  function updateIndexFilesIfNeeded(
    nestedRouteActions: PlopTypes.ActionType[],
    rootSegments: string[],
    currentDirSegments: string[],
  ) {
    const indexFilePath = path.resolve(process.cwd(), '..', '..', ...rootSegments, ...currentDirSegments, 'index.ts');
    const root = rootSegments.join('/');

    if (!fs.existsSync(indexFilePath)) {
      const content = `${'"use client";\n'}// ${currentDirSegments.join('/')} component exports\n`;

      nestedRouteActions.push({
        type: 'add',
        path: `${root + currentDirSegments.join('/')}/index.ts`,
        template: content,
      });
    } else {
      const length = currentDirSegments.length;
      nestedRouteActions.push({
        type: 'append',
        pattern: /[;]/,
        path: `${root + (length === 1 ? '' : `${currentDirSegments.slice(0, length - 1).join('/')}/`)}index.ts`,
        template: `export * from "./${currentDirSegments[length - 1]}"`,
      });
    }
  }
}
