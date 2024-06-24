import type { Config } from '@jest/types';
import nextJest from 'next/jest.js';

// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
const createJestConfig = nextJest({
  dir: './',
});

// // Add Jest config
// const jestConfig: Config = {
//   coverageProvider: 'v8',
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['@betahcoding/jest-config/jest.setup.ts'],
// };

// // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// export default createJestConfig(jestConfig);

// Import the Config type from Jest's types to provide type-checking for the config object.

// Define your Jest configuration with a typed object.
const config: Config.InitialOptions = {
  preset: 'ts-jest', // Use ts-jest preset, which includes TypeScript support and jsdom environment.
  coverageProvider: 'v8',
  testEnvironment: 'jsdom', // Specify the testing environment to simulate a browser (DOM).
  transform: {
    // Transform files matching the .ts or .tsx extension using ts-jest.
    // This allows TypeScript files to be compiled for tests.
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.jest.json', // Specify the TypeScript config specifically for Jest.
      },
    ],
  },
  setupFilesAfterEnv: ['@betahcoding/jest-config/jest.setup.ts'],
};

export default createJestConfig(config);
