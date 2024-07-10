/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './public/**/*.astro',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    'node_modules/preline/dist/preline.js'
  ],
  theme: {
    extend: {
      aria: {
        current: "current=page",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
};