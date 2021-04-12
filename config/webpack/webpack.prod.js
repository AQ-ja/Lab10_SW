const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');
// eslint-disable-next-line import/no-extraneous-dependencies
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../../build'),
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: '[name]-bundle.css' }),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

});
