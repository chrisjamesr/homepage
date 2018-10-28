const merge = require('webpack-merge');
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
          use: [
            {
                loader: 'url-loader'
            },
          ]
      }
    ]
  }
})