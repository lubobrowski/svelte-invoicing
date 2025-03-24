import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : '/svelte-invoicing'
		}
	}
}

export default config
