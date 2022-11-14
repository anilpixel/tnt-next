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
    configureWebpack() {
      return {
        resolve: {
          fallback: {
            'react/jsx-runtime': 'react/jsx-runtime.js',
            'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
          },
        },
      }
    },
  }
}
