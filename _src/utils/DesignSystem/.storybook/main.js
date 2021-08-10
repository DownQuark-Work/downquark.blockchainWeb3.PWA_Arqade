// https://storybook.js.org/docs/react/configure/typescript

module.exports = {
  features: {
    postcss: false,
  },
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-a11y',
    "@storybook/addon-essentials",
    "@storybook/addon-links",
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
  // babel: async (config, options) => {
  //   const removeIncorrectConfigIndex = config.plugins.findIndex(plug => plug.length === 2 && plug[1].legacy)
  //   console.log('removeIncorrectConfigIndex', removeIncorrectConfigIndex, config.plugins[removeIncorrectConfigIndex])
  //   config.plugins.splice(removeIncorrectConfigIndex, 1)
  //   config.plugins.unshift([
  //     require.resolve('@babel/plugin-proposal-decorators'),
  //     { decoratorsBeforeExport: true, legacy: false },
  //     'resolves-duplicate-babel-plugin-proposal-decorators-name'
  //   ])
  //   config.plugins.unshift([require.resolve('@babel/plugin-proposal-class-properties'), { loose: true }, 'resolves-duplicate-babel-plugin-proposal-class-properties-name'])
  //   // return config
  //   return {
  //     ...config,
  //     plugins: [
  //       // ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
  //       // ['@babel/plugin-proposal-class-properties', { 'loose': true }],
  //       ...config.plugins,
  //     ],
  //   }
  // },
  webpackFinal: async (config, { configType }) => {
    const ruleJsIndex = config.module.rules.findIndex(
      (rule) => rule.test.toString() === "/\\.js$/"
    )
    config.module.rules[ruleJsIndex].use[0].options.plugins

    const trial = {
      test: /\.js$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            plugins: [
              [require.resolve('@babel/plugin-proposal-class-properties'), { loose: true }],
              [
                require.resolve('@babel/plugin-proposal-decorators'),
                { decoratorsBeforeExport: true, legacy: false }
              ],
            ]
          }
        }]
    }
    config.module.rules.push(trial)
    return config
  }
}
