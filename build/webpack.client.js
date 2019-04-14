const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',

  // 将 entry 指向应用程序的 server entry 文件
  entry: {
    app: './entry-client.js'
  },

  plugins: [
    new VueSSRClientPlugin()
  ],

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  }
});