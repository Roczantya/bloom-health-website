
import type { Config } from "tailwindcss";
export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				playfair: ['Playfair Display', 'serif'],
				sans: ['Inter', 'ui-sans-serif', 'system-ui'],
			},
			colors: {
				primary: {
					DEFAULT: 'hsl(160, 100%, 40%)', // green
					foreground: '#fff'
				},
				gradient1: '#98e4cf',
				gradient2: '#82b3f4',
				gradient3: '#ffe3ec',
			},
			boxShadow: {
				card: '0 4px 24px 0 rgba(60, 60, 60, 0.06)',
			},
			keyframes: {
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
			animation: {
				'fade-in-up': 'fade-in-up 1s cubic-bezier(0.4, 0.2, 0.2, 1)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
