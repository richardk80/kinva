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
        player: ['Helvetica', 'Arial']
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('preline/plugin')
  ],
};