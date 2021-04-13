// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.jsx',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Calcu_Lab10',
      filename: 'index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /.js?x$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
    ],
  },
};
