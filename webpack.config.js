const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.js', 
  output: {
    filename: 'index.js', 
    path: path.resolve(__dirname, 'dist'), 
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', 
        },
      },
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template/index.html', 
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), 
    },
    compress: true,
    port: 9000,
    open: true,
  }
};
