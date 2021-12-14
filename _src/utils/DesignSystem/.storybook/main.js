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
          sourceMap: false,
        },
      },
    },
  ],
  "framework": "@storybook/web-components",

  webpackFinal: async (config) => {
    const scssConfigIndex = config.module.rules.findIndex((config) => ".scss".match(config.test))
    config.module.rules.splice(scssConfigIndex, 1)

    config.module.rules.push({
      test: /\.scss$/,
      exclude: /\.module\.scss$/i,
      use: [
        'style-loader',
        'css-loader?url=false',
        {
          loader: "sass-loader",
          options: { sourceMap: true, },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
      test: /\.css$/i,
        loader: "css-loader",
        options: {
          modules: {
            mode: "global",
          },
        },
  })
// https://github.com/webpack-contrib/css-loader/tree/ae988451a9638662625e515b915a12f6e2c9378a#esmodule
// https://www.npmjs.com/package/to-string-loader
  config.module.rules.push({
    test: /\.module\.scss$/i,
    use: [
      {
          loader: "to-string-loader",
      },
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
          modules: {
            compileType: 'module',
            exportGlobals: true,
            localIdentName: "[name]",
            exportLocalsConvention: "camelCaseOnly",
            exportOnlyLocals: false,
          },
        },
      },
      {
        loader: "sass-loader",
        options: { sourceMap: false, },
      },
    ],
    include: path.resolve(__dirname, '../'),
  },)

    return config;
  },
}