/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
    darkMode: ['class'],
    content: [
    './public/**/*.astro',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    'node_modules/preline/dist/preline.js'
  ],
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
  		black: '900'
  	},
  	extend: {
  		aria: {
  			current: 'current=page'
  		},
  		fontFamily: {
  			heading: ['var(--font-heading)', ...fontFamily.sans],
  			body: ['var(--font-body)', ...fontFamily.sans],
  			player: ['Roboto"', ...fontFamily.sans]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [
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
      require("tailwindcss-animate")
],
};