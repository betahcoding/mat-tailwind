import type { Config } from '@jest/types';
import nextJest from 'next/jest.js';

// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
const createJestConfig = nextJest({
  dir: './',
});

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
