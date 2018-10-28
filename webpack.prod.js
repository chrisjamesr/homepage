const merge = require('webpack-merge');
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production'
  // ,
  // module: {
  //   rules: [
  //     {
  //       test: /\.(jpeg|svg)$/i, 
  //       use: {
  //         loader: "file-loader",
  //         options : {
  //           name: '[path][name].[ext]'
  //           // publicPath: '/dist/images'
  //         }
  //       }
  //     }
  //   ]
  // }
})

