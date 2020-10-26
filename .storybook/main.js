module.exports = {
  "stories": [
    "../projects/ui-explorer/src/**/*.stories.mdx",
    "../projects/ui-explorer/src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    '@storybook/addon-notes/register',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: true,
        controls: true,
        actions: true,
        viewport: true,
        backgrounds: true,
      }
    }
  ]
}
