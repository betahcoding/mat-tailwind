export default {
  '{apps,packages}/ui/src/**/*.{ts,tsx}': () => [`tsc --noEmit`, `turbo lint`, `prettier --write --ignore-unknown`],
  '{apps,packages}/**/*.{json,md,mdx,html}': () => [`prettier --write --ignore-unknown`],
};
