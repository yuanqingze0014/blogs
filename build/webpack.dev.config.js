const { resolve } = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')
// css解析
let cssLoaders = [
  MiniCssExtractPlugin.loader,
  // {
  // loader:'style-loader',
  // },
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1
    }
  },
  {
    loader: 'postcss-loader'
  }
]

const devConfig = {
  mode: 'development',
  output: {
    path: resolve('./dist/client/'),
    filename: 'scripts/[name].bundle.js'
    // filename: '[name].js',
  },
  devServer: {
    hot: true,
    port: 3456,
    historyApiFallback: true
    // watchContentBase: true,
    // inline:true,
    // // 代理服务器端域名
    // proxy: {
    //   // '/': 'https://cdfangyuan.cn/graphql',
    // }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)/,
        include: [resolve('src')],
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.(css|less)$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'] }
    ]
  },
  plugins: [
    // new webpack.BannerPlugin('Hello Word'),
    new HtmlWebpackPlugin({
      title: 'React - webpack4.0',
      filename: 'index.html',
      template: './build/template/index.ejs',
      favicon: './build/template/favicon.ico',
      env: process.env.NODE_ENV
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[id].css',
      ignoreOrder: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    // alias: {
    //   '@': resolve(__dirname, '/src/client')
    // },
  }
}
console.log(`%c 🔯 🚀 : merge(baseConfig, devConfig) `, `font-size:14px;background-color:#2527f3;color:white;`, merge(baseConfig, devConfig))
module.exports = merge(baseConfig, devConfig)
