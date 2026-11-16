import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';
import mkcert from 'vite-plugin-mkcert';

// https://astro.build/config
export default defineConfig({
	adapter: vercel(),
	output: 'server',
	vite: {
		plugins: [mkcert()],
	},
});
