const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const root = path.resolve(__dirname, '..')

module.exports =  {
  devtool: 'cheep-source-map',
  entry: path.resolve(root, 'src/index.ts'),
  output: {
    filename: 'index.js',
    path: path.resolve(root, 'dist'),
    publicPath: 'dist/',
    sourceMapFilename: 'white-cat.sourcemap.js',
    library: 'WhiteCat',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'source-map-loader'
      },
      {
        test: /\.tsx?$/,
        include: path.resolve(root, 'src'),
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      },
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: 'css-loader'
      //   })
      // },
      {
        test: /\.less$/i,
        use: ExtractTextPlugin.extract(['css-loader', 'less-loader'])
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{loader: 'url-loader', options: {limit: 8192}}]
      }
    ]
  },
  resolve: {
    // alias: {
    //   'react': path.resolve(root, 'node_modules/react')
    // },
    extensions: ['.tsx','.ts', '.js', '.less']
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ],
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  }
}
