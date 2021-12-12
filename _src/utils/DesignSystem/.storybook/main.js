const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
  // webpackFinal: async (config, { configType }) => {
  webpackFinal: async (config) => {
    // const miniCSS = new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: "[name].css",
    //   chunkFilename: "[id].css",
    // })
    //   config = {
    //     ...config,
    //     plugins: [
    //       ...config.plugins,
    //       miniCSS,
    //     ],
    //   }
    config.plugins.push(new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }))
    
    const scssConfigIndex = config.module.rules.findIndex((config) => ".scss".match(config.test))
    config.module.rules.splice(scssConfigIndex, 1)
    // console.log('config', config)

    config.module.rules.push({
      test: /\.scss$/,
      exclude: /\.module\.scss$/i,
      use: [
        // fallback to style-loader in development
        // process.env.NODE_ENV !== "production"
        //   ? "style-loader"
        //   : MiniCssExtractPlugin.loader,
        'style-loader',
        'css-loader?url=false',
        'sass-loader'],
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

  config.module.rules.push({
    test: /\.module\.scss$/i,
    use: [
      {
        // loader: "style-loader",
          loader: "to-string-loader",
      },
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
          modules: {
            // compileType: 'module',
            mode: "local",
            //// the above gives us something at least
            compileType: "module",
            // mode: "local",
            auto: true,
            exportGlobals: true,
            // localIdentName: "[path][name]__[local]--[hash:base64:5]",
            // localIdentContext: path.resolve(__dirname, "src"),
            // localIdentHashPrefix: "my-custom-hash",
            // namedExport: true,
            exportLocalsConvention: "camelCaseOnly",
            exportOnlyLocals: false,
          },
        },
      },
      {
        loader: "sass-loader",
      },
    ],
    include: path.resolve(__dirname, '../'),
  },)

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