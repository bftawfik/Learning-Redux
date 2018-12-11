// for more help with webpack look at https://www.robinwieruch.de/minimal-react-webpack-babel-setup/

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist/assets",
    filename: "bundle.js",
    publicPath: "assets"
  },
  devServer: {
    contentBase: "./dist",
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }

}
