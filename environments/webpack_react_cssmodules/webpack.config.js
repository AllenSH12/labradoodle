module.exports = {
  context: __dirname + '/src',
  entry: './index.jsx',
  output: {
    path: './www/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules'
    }]
  }
};
