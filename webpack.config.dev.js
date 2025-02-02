module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  devServer: {
    static: {
      directory: './public',  // Serve static files from the 'public' folder
    },
    open: true,  // Automatically opens the browser
  },
};
