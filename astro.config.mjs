import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import robotsTxt from 'astro-robots-txt';
import eventsource from 'eventsource';
import compressor from "astro-compressor";
import icon from "astro-icon";
import { shield } from '@kindspells/astro-shield'
global.EventSource = eventsource;


// https://astro.build/config
export default defineConfig({
  site: "https://www.himoot.com",
  prefetch: true,
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
  integrations: [tailwind(), robotsTxt({
    sitemap: false
  }), compressor({
    gzip: true,
    brotli: false
  }), icon(), shield({})],
  output: 'server',
  server: {
    headers: {
      "Accept-Encoding": "gzip, deflate, zstd"
    }
  },
  adapter: vercel()
});