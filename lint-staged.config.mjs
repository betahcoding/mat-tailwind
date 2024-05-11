export default {
  '{apps,packages,turbo}/ui/src/**/*.{ts,tsx}': () => [
    `tsc --noEmit`,
    `turbo lint`,
    `prettier --write --ignore-unknown`,
  ],
  '{apps,packages,turbo}/**/*.{json,md,mdx,html}': () => [`prettier --write --ignore-unknown`],
};
