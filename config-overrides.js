const {
    override,
    addPostcssPlugins,
    fixBabelImports,
    overrideDevServer
  } = require('customize-cra');
  const path = require('path');
  const webpack = require('webpack');
  const ENV = {
    DEV: 'http://192.168.1.73:7001/',
    PROD:  'http://192.168.1.73:7001/',
  };
  const SECOND_ENV = {
    DEV: 'http://192.168.1.73:7001/',
    PROD:  'http://192.168.1.73:7001/',
  };
  const devServerConfig = () => config => {
    return {
      ...config,
      proxy: {
        '/': {
          target: ENV.DEV,
          changeOrigin: true,
          secure: false
        }
      }
    };
  };
  
  // 关掉 sourceMap
  process.env.GENERATE_SOURCEMAP = process.env.NODE_ENV === 'development' ? 'true' : 'false';
  
  module.exports = {
    webpack: override(
      addPostcssPlugins([
        require('postcss-normalize')({
          forceImport: true
        }),
        require('postcss-preset-env')({
          stage: 0
        })
      ]),
    //   fixBabelImports('import', {
    //     libraryName: 'antd',
    //     libraryDirectory: 'es',
    //     style: 'css'
    //   })
    ),
    devServer: overrideDevServer(devServerConfig())
  };