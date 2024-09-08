module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      process.env.NODE_ENV === 'production'
        ? [
            require('@fullhuman/postcss-purgecss')({
              content: ['./src/**/*.astro', './src/**/*.js', './src/**/*.jsx', './src/**/*.tsx', './src/**/*.html'],
              defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
              safelist: {
                standard: [/^bg-/, /^text-/],  // You can add classes you want to retain here
              },
            }),
            require('cssnano')({
              preset: 'default',
            }),
          ]
        : [],
    ],
  };  