import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/app/**/*.{ts,tsx}',
		'./src/components/**/*.{ts,tsx}',
		'./src/layout/**/*.{ts,tsx}',
		'./src/data/**/*.{ts,tsx}',
		'./src/utils/**/*.{ts,tsx}'
	],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/line-clamp'), require('tw-animate-css')]
}

export default config
