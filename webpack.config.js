module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    loaders: [
      {
        test: /.js/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  }
};
