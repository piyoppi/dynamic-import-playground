const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  devtool: "source-map",
  entry: {
    //index1: './src/import1.js',
    index2: './src/import2.js',
    //index3: './src/import3.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: [".js"]
  },
  plugins: [
    //new HtmlWebpackPlugin({
    //  filename: 'index.html',
    //  chunks: ['index1']
    //}),
    new HtmlWebpackPlugin({
      filename: 'index2.html',
      chunks: ['index2']
    }),
    //new HtmlWebpackPlugin({
    //  filename: 'index3.html',
    //  chunks: ['index3']
    //})
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 9000,
  },
}
