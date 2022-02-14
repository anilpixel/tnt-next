const rootMain = require('../../../.storybook/main');

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

  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],

  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    config.module.rules = config.module.rules.map((rule) => {
      if (rule.test.toString().indexOf('.less') !== -1) {
        return {
          ...rule,
          oneOf: rule.oneOf.map((oneOf) => ({
            ...oneOf,
            use: oneOf.use.map((use) => {
              // 自定义 css module 规则
              if (
                use.loader &&
                use.loader.indexOf('css-loader') !== -1 &&
                use.options &&
                use.options.modules
              ) {
                return {
                  ...use,
                  options: {
                    ...use.options,
                    modules: {
                      localIdentName: `tnt-next-[local]`,
                      localIdentHashSalt: 'tnt-next',
                      exportLocalsConvention: 'camelCase',
                    },
                  },
                };
              }

              // 自定义 ant-design 主题
              if (use.loader && use.loader.indexOf('less-loader') !== -1) {
                use.options = {
                  ...use.options,
                  lessOptions: {
                    ...use.options.lessOptions,
                    javascriptEnabled: true,
                    math: 'always',
                    modifyVars: {
                      hack: 'true; @import "@tnt-next/themes/default/variables.less";',
                    },
                  },
                };
              }

              return use;
            }),
          })),
        };
      }

      return rule;
    });

    return config;
  },
};
