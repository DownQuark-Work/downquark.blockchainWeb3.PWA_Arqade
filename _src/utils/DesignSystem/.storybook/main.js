const path = require('path')

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
          sourceMap: true,
          modules: { localIdentName: '[name]__[local]--[hash:base64:5]' },
        },
        sassLoaderOptions: {
          implementation: require("sass"), // prefer Dart-Sass
          sourceMap: true,
        },
      },
    },
  ],
  "framework": "@storybook/web-components",
  webpackFinal: async (config) => {
    // webpackFinal: async (config, { configType }) => {
    const scssConfigIndex = config.module.rules.findIndex((config) => ".scss".match(config.test))
    console.log('scssConfigIndex', scssConfigIndex)
    console.log('config.module.rules', config.module.rules)
    config.module.rules.splice(scssConfigIndex, 1)

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader?url=false', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
}

/*
{
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          sourceMap: true,
          modules: { localIdentName },
        },
        sassLoaderOptions: {
          implementation: require("sass"), // prefer Dart-Sass
          sourceMap: true
        },
      },
    },
*/