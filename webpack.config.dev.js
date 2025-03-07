const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './',  // Serving static files from the root directory
    liveReload: true,
    hot: true,
    open: true,
    historyApiFallback: true,  // Ensures navigation is handled by index.html
    port: 8080,  // Optional: specify the port if you need it
  },
});
