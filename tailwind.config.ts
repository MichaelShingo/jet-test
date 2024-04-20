import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'orange-primary': 'rgba(247,124,0,255)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			animation: {
				'animate-in': 'animate-in 1s ease-in-out',
			},
			keyframes: {
				'animate-in': {
					'0%': { opacity: '0%' },
					'100%': { opacity: '100%' },
				},
			},
		},
	},
	plugins: [],
};
export default config;
