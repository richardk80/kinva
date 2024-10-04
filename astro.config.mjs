import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import robotsTxt from 'astro-robots-txt';
import eventsource from 'eventsource';
import compressor from "astro-compressor";
import icon from "astro-icon";
import { shield } from '@kindspells/astro-shield'
import react from '@astrojs/react';
import purgecss from 'astro-purgecss';
global.EventSource = eventsource;


// https://astro.build/config
export default defineConfig({
  site: "https://www.himoot.com",
  prefetch: true,
  server: {
    port: 4321,
  },
  buildOptions: {
    sourcemap: false, // Disable sourcemaps entirely
  },
  vite: {
    build: {
      inlineStylesheets: 'always',
      rollupOptions: {
        output: {
          entryFileNames: 'entry.[hash].js',
          chunkFileNames: 'chunks/chunk.[hash].js',
          assetFileNames: '_astro/global.himoot.assets.[hash][extname]'
        }
      }
    }
  },
  integrations: [tailwind({
    applyBaseStyles: true,
  }), robotsTxt({
    sitemap: false
  }), compressor({
    gzip: true,
    brotli: false
  }), icon(), 
  shield({}), 
  react(),
  purgecss({
    extractors: [
      {
        extractor: (content) =>
          content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
        extensions: ['astro', 'html']
      }
    ]
  }),
  ],
  output: 'server',
  server: {
    headers: {
      "Accept-Encoding": "gzip, deflate, zstd"
    }
  },
  adapter: vercel()
});