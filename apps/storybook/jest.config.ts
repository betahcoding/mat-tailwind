import sharedConfig from '@betahcoding/jest-config/next';
import type { Config } from 'jest';

const config: Config = {
  ...sharedConfig,
  verbose: true,
};

export default config;
