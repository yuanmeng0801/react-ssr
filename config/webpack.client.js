const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const clientConfig = {
  mode: 'production',
  entry: path.resolve(__dirname, '../client/index.js'),
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, '../dist')
  }
}

module.exports = merge(baseConfig, clientConfig)
