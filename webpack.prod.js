const path = require('path');

const {merge} = require('webpack-merge');

const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  }
});
