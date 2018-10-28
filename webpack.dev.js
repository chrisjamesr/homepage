const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,{
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 3000, 
    open: true,
    historyApiFallback: true
  }
  // ,
  // module: {
  //   rules: [
  //     {
  //       test: /\.(jpg|svg)$/,
  //         use: [
  //             {
  //               loader: 'url-loader',
  //               options : {
  //                 name: '[path][name].[ext]'
  //                 // publicPath: '/dist/images'
  //               }
  //             },
  //         ]
  //     } 
  //   ]
  // }
})
  