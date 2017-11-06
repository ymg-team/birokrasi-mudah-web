const Webpack  = require('webpack')
const Path = require('path')
const AssetsPlugin = require('assets-webpack-plugin')
const BUILD_DIR = '../../bundle/'

module.exports = {
  entry: {
      app: ['./src/client/index.js'],
      vendor: ['react','react-dom','react-router-dom']
  },

  output: {
      path: Path.resolve(__dirname, BUILD_DIR),
      filename: process.env.NODE_ENV == 'production' ? '[name].[hash].js' : '[name].js',
      publicPath: '/bundle/'
  },

  plugins: [
    new AssetsPlugin({prettyPrint: true, path: Path.join(__dirname, '../')}),
    new Webpack.NoEmitOnErrorsPlugin(),
    new Webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: process.env.NODE_ENV == 'production' ? 'vendor.[hash].js' : 'vendor.js',
        minChunks: Infinity
    }),
    new Webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              use: [
                {
                  loader: 'babel-loader'
                }
              ]             
          }
      ]
  }

}