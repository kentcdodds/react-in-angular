var exclude = /node_modules/;
var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: here('app')
  },

  context: here('app'),

  stats: {
    colors: true,
    reasons: true
  },

  devtool: 'eval',

  module: {
    loaders: [
      {test: /\.html$/, loader: 'raw', exclude: exclude},
      {test: /\.css$/, loader: 'style!css', exclude: exclude},
      {test: /\.js$/, loader: '6to5', exclude: exclude},
      {test: /\/components\/.*?\.js$/, loader: 'jsx?harmony', exclude: exclude}
    ]
  }
};


function here(p) {
  return path.join(__dirname, p || '');
}
