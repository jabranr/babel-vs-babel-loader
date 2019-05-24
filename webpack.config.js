const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'webpack')
  },
  mode: 'development',
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'to-string-loader'},
          {loader: 'css-loader'}
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin()
  ]
};