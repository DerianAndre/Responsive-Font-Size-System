export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Server
	server: {
		host: '0.0.0.0'
	},
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Responsive Font Size System - @DerianAndre',
		meta: [
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
		link: [
			{ rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
		],
		script: [
			{ src: 'https://polyfill.io/v3/polyfill.min.js?features=es6', body: true },
		]
	},
	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/scss/style.scss',
	],
	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,
	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		loaders: {
			vue: {
				compilerOptions: {
					whitespace:         'condense',
					preserveWhitespace: false
				}
			},
			sass: {
				implementation: require('sass')
			},
			scss: {
				implementation: require('sass')
			}
		}
	},
}
