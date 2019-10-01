const path = require('path');

module.exports = {
  mode: 'development',
  entry: './app/src/js/index',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'app/dist')
  },
  target: "electron-renderer"
};
