import { resolve } from 'node:path';
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import robotsTxt from 'astro-robots-txt';
import eventsource from 'eventsource';
import compressor from "astro-compressor";
import icon from "astro-icon";
import { shield } from '@kindspells/astro-shield';
global.EventSource = eventsource;

const rootDir = new URL('.', import.meta.url).pathname;
const modulePath = resolve(rootDir, 'src', 'generated', 'sriHashes.mjs')

// https://astro.build/config
export default defineConfig({
  site: "https://www.kinva.net",
  prefetch: true,
  server: {
    port: 4321,
  },
  buildOptions: {
    sourcemap: false, // Disable sourcemaps entirely
  },
  vite: {
    build: {
      cssMinify: false, // Disable CSS minification
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
  integrations: [
  tailwind(), 
  robotsTxt({
  sitemap: false
}), compressor({
    gzip: true,
    brotli: false
  }), icon(), shield({
    securityHeaders: {
      // This option is required to configure CSP headers for your static
      // content on Vercel.
      enableOnStaticPages: { provider: "vercel" },

      // - If set, it controls how the CSP (Content Security Policy) header
      //   will be generated.
      // - If not set, no CSP header will be configured for your static
      //   content (there is no need to specify its inner options).
      contentSecurityPolicy: {
        // - If set, it controls the "default" CSP directives (they can be
        //   overriden at runtime).
        // - If not set, Astro-Shield will use a minimal set of default
        //   directives.
        cspDirectives: {
          'default-src': "'none'",
        }
      }
    }
  })
],
  output: 'server',
  server: {
    headers: {
      "Accept-Encoding": "gzip, deflate, zstd",
    }
  },
  adapter: vercel()
});