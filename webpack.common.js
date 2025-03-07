const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // For handling HTML template injection

module.exports = {
  entry: './src/index.js',  // Entry point for your application (make sure this file exists)
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file name for bundled JS
    publicPath: '/', // Ensures assets are correctly loaded from the root
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Apply this rule to JavaScript files
        exclude: /node_modules/,
        use: 'babel-loader',  // This will allow Webpack to transpile JavaScript with Babel
      },
      {
        test: /\.css$/,  // Apply this rule to CSS files
        use: ['style-loader', 'css-loader'],  // Inject CSS into DOM
      },
      {
        test: /\.(html)$/,  // Apply this rule to HTML files
        use: ['html-loader'],  // Allows HTML files to be bundled
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',  // Path to your HTML template
    }),
  ],
};
