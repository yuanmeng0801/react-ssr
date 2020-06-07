const path = require('path')
const merge = require('webpack-merge')
const _externals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.js')

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: path.resolve(__dirname, '../server/index.js'),
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../dist')
  },
  externals: [_externals()]
}

module.exports = merge(baseConfig, serverConfig)
