module.exports = function (context, options) {
  return {
    name: 'postcss-tailwindcss-loader',
    configurePostCss(postcssOptions) {
      postcssOptions.plugins.push(
        require('tailwindcss'),
        require('postcss-nested'),
        require('autoprefixer')
      )

      return postcssOptions
    },
    configureWebpack(config) {
      config.module.rules = config.module.rules.map((rule) => {
        if (rule.test.toString() === '/\\.less$/') {
          rule.oneOf[1].exclude = /\.inject\.less$/
        }

        return rule
      })

      return {
        devtool: 'eval-source-map',
        module: {
          rules: [
            {
              test: /\.inject\.less$/,
              use: [
                'to-string-loader',
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                  },
                },
                {
                  loader: 'less-loader',
                  options: {
                    sourceMap: false,
                    lessOptions: {
                      javascriptEnabled: true,
                      math: 'always',
                      modifyVars: {
                        hack: 'true; @import "@tnt-next/themes/default/variables.less";',
                      },
                    },
                  },
                },
              ],
            },
          ],
        },
      }
    },
  }
}
