module.exports = {
  features: {
    postcss: false,
  },
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: { localIdentName: '[name]__[local]--[hash:base64:5]' },
        },
        sassLoaderOptions: {
          sourceMap: true,
        },
      },
    },
  ],
  "framework": "@storybook/web-components"
}