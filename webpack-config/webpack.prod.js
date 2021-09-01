const path = require('path');

module.exports = {
  mode: 'production',
  plugins: [],
  devServer: {
    contentBase: path.resolve(__dirname, '..', './dist'),
  },
};
