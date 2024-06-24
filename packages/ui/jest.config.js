// here, we can't use jest.config.ts due to ts-node issue and since jest is using ts-node,
// hence we have to wait and keep using jest.config.js file format until they fix this.
import baseConfig from '@betahcoding/jest-config/react.js';

export default {
  ...baseConfig,
  verbose: true,
};
