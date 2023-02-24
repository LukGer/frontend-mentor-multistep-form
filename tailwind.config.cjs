/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				marineBlue: '#02295A',
				purplishBlue: '#473DFF',
				pastelBlue: '#ADBEFF',
				lightBlue: '#BFE2FD',
				strawberryRed: '#ED3548',
				coolGray: '#9699AB',
				lightGray: '#D6D9E6',
				magnolia: '#F0F6FF',
				alabaster: '#FAFBFF'
			},
			fontFamily: {
				sans: 'Ubuntu'
			}
		}
	},
	plugins: []
};
