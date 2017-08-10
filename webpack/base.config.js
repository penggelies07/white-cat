const path = require('path')
const root = path.resolve(__dirname, '..')

module.exports = {
  devtool: 'inline-source-map',
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
        use: ['react-hot-loader/webpack', 'awesome-typescript-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{loader: 'url-loader', options: {limit: 8192}}]
      },
      {
        test: /\.md$/,
        loader: 'raw-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.less']
  }
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM'
  // }
}
