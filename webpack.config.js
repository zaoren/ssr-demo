const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    client: './client-ssr',
  },
  output: {
    path: path.resolve(__dirname, 'asset'),
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
 }
}
