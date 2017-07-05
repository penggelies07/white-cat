const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./base.config')

const root = path.resolve(__dirname, '..')

module.exports = merge(baseConfig, {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    path.resolve(root, 'src/demo.tsx')
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(root, 'dist-demo'),
    publicPath: '/'
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 8080,
    publicPath: '/',
    contentBase: path.resolve(root, 'dist-demo')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(root, 'src/demo.html')
    })
  ]
})
