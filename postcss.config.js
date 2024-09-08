const crypto = require('crypto');

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-class-rename')({
      transform: (class) => {
        // Hash the class names to a fixed length
        return crypto.createHash('md5').update(className).digest('hex').slice(0, 6);
      }
    }),
  ],
};