# @betahcoding/mat-tailwind

A React UI component and design system library built with love on top of TailwindCSS. Insipired by Google Material Design.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) for documentation app.
- `nextjs`: a [Next.js](https://nextjs.org/) for demonstrating the usage of app.
- `storybook`: a [Next.js](https://nextjs.org/) for UI and design system workshop app.
- `@betahcoding/mat-tailwind`: a stub React component library shared by both `nextjs` and `docs` applications.
- `@betahcoding/eslint-config`: contains `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`).
- `@betahcoding/eslint-config`: contains `jest` configurations.
- `@betahcoding/tailwind-config`: contains `tailwind` configurations.
- `@betahcoding/ts-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting.
- [Prettier](https://prettier.io) for code formatting.
- [Husky](https://typicode.github.io/husky/) for automatic linting commit messages, code, and run tests upon committing or pushing.
- [Lint-staged](https://github.com/lint-staged/lint-staged) for pre-commit linting.

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
