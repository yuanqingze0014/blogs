const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
// const QiniuUploadPlugin = require('qiniu-upload-plugin')
// const qiniuConfig = require('./qiniu.config')
const baseConfig = require('./webpack.base.config')

const prodConfig = {
  mode: 'production',
  output: {
    // publicPath: 'qiniuConfig.publicPath',
    path: path.resolve('./dist/client'),
    filename: "scripts/[name].[contenthash:8].bundle.js",
  },
  module: {
    rules: [
      { test: /\.(css|less)$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'] }
      // {
      //   test: /\.less$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     'postcss-loader',
      //     {
      //       loader: 'less-loader',
      //       options: {
      //         lessOptions: {
      //           javascriptEnabled: true
      //         }
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:5].css',
      chunkFilename: 'styles/[id].[contenthash:5].css',
      ignoreOrder: true
    }),
    new HtmlWebpackPlugin({
      template: './build/template/index.ejs',
      favicon: './build/template/favicon.ico',
      env: process.env.NODE_ENV,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    // 公益 404
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: './build/template/404.ejs',
      favicon: './build/template/favicon.ico',
      inject: false
    }),
    // pwa 支持
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true, // 让浏览器立即 servece worker 被接管
      skipWaiting: true, // 更新 sw 文件后，立即插队到最前面
      include: [/\.js$/, /\.css$/, /\.ico$/]
    })
  ],
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors'
        }
      }
    }
  },
  // externals: {
  //   'react-dom': 'ReactDOM'
  // }
}

// ci 环境不上传 cdn
if (process.env.BUILD_ENV !== 'ci' && process.env.BUILD_ENV !== 'analysis') {
  // prodConfig.plugins.push(new QiniuUploadPlugin(qiniuConfig))
}

module.exports = merge(baseConfig, prodConfig)
