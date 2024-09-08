const classHashPlugin = require('./src/scripts/postcss-class-hash');

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    classHashPlugin({ hashLength: 6 })
  ],
};