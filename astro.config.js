import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  vite: {
    plugins: [mkcert()],
  },
});