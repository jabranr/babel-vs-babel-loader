const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');

const entry = path.resolve(__dirname, 'src/components/joe-bloggs/index.js');
const outputPath = path.resolve(__dirname, 'src/components/joe-bloggs/dist');

module.exports = (env) => ({
  entry,
  output: {
    filename: 'cjs.js',
    path: outputPath,
    libraryTarget: 'commonjs2'
  },
  mode: env,
  optimization: {
    minimize: env === 'production'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss|css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { url: true } },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.module.css'
    }),
    new ReplaceInFileWebpackPlugin([
      {
        dir: outputPath,
        files: ['index.js'],
        rules: [
          {
            search: /\.scss/g,
            replace: '.css'
          }
        ]
      }
    ])
  ]
});