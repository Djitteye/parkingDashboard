import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
		fontFamily:{
			titre:["kadwa", "serif"]

		},
  		gridTemplateColumns: {
  			'13': 'repeat(13, minmax(0, 1fr))'
  		},
  		colors: {
  			blue: {
  				'400': '#2589FE',
  				'500': '#0070F3',
  				'600': '#2F6FEB'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
			
  		}
  	},
  	keyframes: {
  		shimmer: {
  			'100%': {
  				transform: 'translateX(100%)'
  			}
  		}
  	}
  },
  plugins: [require('@tailwindcss/forms'), require("tailwindcss-animate")],
};
export default config;
