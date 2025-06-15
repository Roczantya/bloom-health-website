
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
				background: '#faf9fc', // soft off-white with a hint of lavender
				foreground: '#34323d', // gentle neutral text
				card: '#f6f4fa',       // pastel card background
				'card-foreground': '#34323d',
				popover: '#f8f6fa',
				'popover-foreground': '#34323d',
				primary: {
					DEFAULT: '#b786f2', // pastel lavender/warm purple
					foreground: '#fff'
				},
				accent: '#c7f5df',       // pastel mint green
				'accent-foreground': '#3d4649',
				secondary: '#ffdbe7',    // blush peach
				'secondary-foreground': '#444043',
				muted: '#ebe6f4',
				'muted-foreground': '#7c758f',
				destructive: '#fe9990',
				'destructive-foreground': '#fff',
				border: '#e3dcec',
				input: '#efeaf7',
				ring: '#ccbed7',
				gradient1: '#e9ddfd',    // soft lavender gradient stop
				gradient2: '#d1f7ee',    // mint green gradient stop
				gradient3: '#ffdbe7',    // blush peach gradient stop
				purple: {
					light: '#ece1fa',
					muted: '#b786f2',
					warm: '#b37cdf',
				},
				mint: {
					light: '#d1f7ee',
					DEFAULT: '#a2efcb',
				},
				peach: {
					light: '#ffdbe7',
					DEFAULT: '#ffb5b5',
				},
				coral: {
					muted: '#ffb7ae',
				}
			},
			boxShadow: {
				card: '0 4px 16px 0 rgba(183, 134, 242, 0.06)', // soft pastel card
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
