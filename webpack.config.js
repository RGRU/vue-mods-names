var path = require('path')
var webpack = require('webpack')
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
  entry: './src/VueModsNames.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'vue-mods-names.js',
    libraryTarget: 'umd',
    library: 'vue-mods-names',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        // exclude: 'test',
        use: [
          'eslint-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
} else {
  module.exports.plugins = [
    new FriendlyErrorsWebpackPlugin()
  ]
}
