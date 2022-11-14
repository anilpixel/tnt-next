const path = require('path')
// @ts-ignore
const rootMain = require('../../../.storybook/main')

module.exports = {
  ...rootMain,

  babel: (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      [
        'import',
        {
          libraryName: 'antd',
          style: true,
        },
      ],
    ],
  }),

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [...rootMain.addons],

  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },

  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType })
    }

    config.resolve.alias['tntd/themes'] = path.join(__dirname, '../themes')

    config.module.rules.push({
      test: /\.less$/,
      use: [
        {
          loader: require.resolve('style-loader'),
        },
        {
          loader: require.resolve('css-loader'),
        },
        {
          loader: require.resolve('less-loader'),
          options: {
            lessOptions: {
              javascriptEnabled: true,
              math: 'always',
            },
          },
        },
      ],
      exclude: /\.module.less$/,
    })

    config.module.rules.push({
      test: /\.module.less$/,
      use: [
        {
          loader: require.resolve('style-loader'),
        },
        {
          loader: require.resolve('css-loader'),
          options: {
            modules: {
              localIdentName: `tntd-[local]`,
              localIdentHashSalt: 'tntd',
              exportLocalsConvention: 'camelCase',
            },
          },
        },
        {
          loader: require.resolve('less-loader'),
          options: {
            lessOptions: {
              javascriptEnabled: true,
              math: 'always',
              modifyVars: {
                hack: 'true; @import "tntd/themes/default/variables.less";',
              },
            },
          },
        },
      ],
    })

    return config
  },
}
