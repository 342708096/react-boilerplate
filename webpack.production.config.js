const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    path.resolve(__dirname, 'app/main.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // include: path.resolve(__dirname, 'app'),
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        // include: path.resolve(__dirname, 'app'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              minimize: true,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.js[x]?$/,
        // include: path.resolve(__dirname, 'app'),
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new CopyWebpackPlugin([
      { from: './app/index.html', to: 'index.html' }
    ])
  ]
};
