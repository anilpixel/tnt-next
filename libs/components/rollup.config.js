const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup');
const postcss = require('rollup-plugin-postcss');
const path = require('path');
const multiInput = require('rollup-plugin-multi-input').default;

module.exports = (config) => {
  const nxConfig = nrwlConfig(config);

  nxConfig.output = {
    ...nxConfig.output,
    name: 'tntNext',
    file: path.join(__dirname, 'dist/tnt-next.min.js'),
  };
  nxConfig.plugins = nxConfig.plugins
    .filter(({ name }) => name !== 'copy')
    .map((plugin) => {
      if (plugin.name === 'postcss') {
        return postcss({
          modules: true,
          minimize: true,
          sourceMap: true,
          extract: true,
          use: {
            less: {
              javascriptEnabled: true,
              math: 'always',
              modifyVars: {
                hack: 'true; @import "@tnt-next/themes/default/variables.less";',
              },
            },
          },
        });
      }

      return plugin;
    });

  return {
    ...nxConfig,
    plugins: [...nxConfig.plugins, multiInput()],
  };
};
