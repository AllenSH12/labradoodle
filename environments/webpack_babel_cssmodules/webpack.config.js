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
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules'
    }]
  }
};
