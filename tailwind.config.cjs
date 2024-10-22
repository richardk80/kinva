/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";
import fluid, { extract } from "fluid-tailwind";

module.exports = {
  content: {
    files: [
      './public/**/*.astro',
      './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
      'node_modules/preline/dist/preline.js',
    ],
    extract,
  },
  theme: {
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    extend: {
      aria: {
        current: "current=page",
      },
      fontFamily: {
        heading: ['var(--font-heading)', ...fontFamily.sans],
        body: ['var(--font-body)', ...fontFamily.sans],
        player: ['"Roboto"', ...fontFamily.sans]
      },
    },
  },
  plugins: [
    fluid,
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('preline/plugin'),
    function ({ addUtilities }) {
      addUtilities({
        '.bg-text-clip': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
        },
        '.text-transparent': {
          'color': 'transparent',
          '-webkit-text-fill-color': 'transparent',
        },
        '.player-fade': {
          'transition': 'opacity 0.5s ease-in-out',
        },
      });
    },
  ],
};