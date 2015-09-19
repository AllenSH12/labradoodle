module.exports = {
  context: __dirname + '/src',
  entry: './index.js',
  output: {
    path: './www/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel'
    }]
  }
};
