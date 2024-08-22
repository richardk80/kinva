/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

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
      },
      fontFamily: {
        heading: ['var(--font-heading)', ...fontFamily.sans],
        body: ['var(--font-body)', ...fontFamily.sans],
        player: ['Verdana', 'Helvetica', 'Arial']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('preline/plugin')
  ],
};