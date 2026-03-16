import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import wasm from "vite-plugin-wasm";
import svgx from "@svgx/vite-plugin-react";

export default defineConfig({
  site: "https://jokersofneon.com",
  integrations: [
    react(),
    sitemap(),
  ],
  vite: {
    plugins: [wasm(), svgx()],
    build: {
      target: "esnext",
    },
    optimizeDeps: {
      esbuildOptions: {
        target: "esnext",
      },
    },
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
  },
});
