import type { Config } from 'tailwindcss';
import tailwindConfig from '@betahcoding/tailwind-config';

const config: Config = {
  presets: [tailwindConfig],
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'red',
        secondary: '#ecc94b',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
