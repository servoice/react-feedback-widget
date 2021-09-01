/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pkg = require('../package.json');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),
  target: 'node',
  externals: { react: 'react', reactDOM: 'react-dom' },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      react: path.resolve('./node_modules/react'),
    },
  },
  plugins: [new CleanWebpackPlugin()],
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: pkg.name,
  },
};
