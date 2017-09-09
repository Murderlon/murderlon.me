/* eslint-disable */
const path = require('path');

module.exports = () => ({
  plugins: {
    'postcss-import': {path: path.join(__dirname, '/src/css')},
    'postcss-cssnext': {browsers: ['last 2 versions']},
    'postcss-url': {url: 'copy', useHash: true},
    'postcss-clean': {}
  }
});
