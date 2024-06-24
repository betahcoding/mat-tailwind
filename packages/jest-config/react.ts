import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.lint.json' }],
  },
  setupFilesAfterEnv: ['@betahcoding/jest-config/jest.setup.ts'],
};

export default config;
