module.exports = {
  "stories": [
    "../projects/ui-explorer/src/**/*.stories.mdx",
    "../projects/ui-explorer/src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register'
  ]
}
