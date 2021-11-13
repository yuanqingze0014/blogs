const { resolve } = require('path')

module.exports = {
  entry: {
    index: './src/client/index.tsx'
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            // 缓存上次编译结果，避免每次重新编译，减少打包时间
            cacheDirectory: true
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.png$/,
        use: 'url-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
    alias: {
      '@assets': resolve(process.cwd(), './src/client/assets'),
      '@components': resolve(process.cwd(), './src/client/components'),
      '@constants': resolve(process.cwd(), './src/client/constants'),
      '@models': resolve(process.cwd(), './src/client/models'),
      '@router': resolve(process.cwd(), './src/client/router'),
      '@pages': resolve(process.cwd(), './src/client/pages'),
      '@utils': resolve(process.cwd(), './src/client/utils'),
      '@recoil': resolve(process.cwd(), './src/client/recoil'),
      '@hooks': resolve(process.cwd(), './src/client/hooks'),
      '@api': resolve(process.cwd(), './src/client/api'),
      '@language': resolve(process.cwd(), './src/client/language'),
    }
  },
  plugins: []
  // externals: {
  //   lodash: '_',
  //   react: 'React',
  //   bizcharts: 'BizCharts',
  //   '@antv/data-set': 'DataSet'
  // }
}
