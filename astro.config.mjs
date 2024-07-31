import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import robotsTxt from 'astro-robots-txt';
import eventsource from 'eventsource';
import compressor from "astro-compressor";
global.EventSource = eventsource;


// https://astro.build/config
export default defineConfig({
  site: "https://hm.rikimade.com",
  prefetch: true,
  vite: {
    build: {
      inlineStylesheets: 'always',
      rollupOptions: {
        output: {
          entryFileNames: 'entry.[hash].js',
          chunkFileNames: 'chunks/chunk.[hash].js',
          assetFileNames: '_astro/global.socialsite.assets.[hash][extname]'
        }
      }
    }
  },
  integrations: [tailwind(), robotsTxt({
    sitemap: false
  }), compressor({
    gzip: true,
    brotli: false
  })],
  output: 'server',
  server: {
    headers: {
      "Accept-Encoding": "gzip, deflate, zstd"
    }
  },
  adapter: vercel()
});