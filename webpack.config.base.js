import path from 'path'
var CopyWebpackPlugin = require('copy-webpack-plugin');
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json-loader'
  }, { test: /\.svg$/, loader: 'svg-inline-loader' },
  {
    test: /^((?!\.global).)*\.css$/,
    loader: ExtractTextPlugin.extract(
      'style-loader',
      'postcss-loader'
    )
  }
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    // root:[],
    extensions: ['', '.js', '.jsx', '.json'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },
  plugins: [
      new CopyWebpackPlugin([
            { from: './app/static', to: path.join(__dirname, './dist/static') }
      ]),
      new ExtractTextPlugin('style.css', { allChunks: true })
  ]
}
