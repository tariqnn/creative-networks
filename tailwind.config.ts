import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#F3EDE3',
          50: '#0B0B0B',
          100: '#171715',
          200: '#292925',
          300: '#474740',
          400: '#55554E',
          500: '#76746C',
          600: '#989389',
          700: '#D8D1C6',
          800: '#ECE6DC',
          900: '#FAF7F1',
          950: '#F3EDE3',
        },
        accent: {
          DEFAULT: '#0B0B0B',
          light: '#292925',
          dark: '#000000',
        },
        lime: {
          DEFAULT: '#C6FF00',
          light: '#D8FF4A',
          dark: '#91BC00',
          ink: '#405300',
        },
        cyan: {
          DEFAULT: '#506700',
          light: '#C6FF00',
          dark: '#3D5000',
        },
        emerald: {
          DEFAULT: '#456000',
          light: '#5C7900',
          dark: '#334700',
        },
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-rubik)', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 20s ease infinite',
        'scroll': 'scroll 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'spotlight': 'spotlight 2s ease 0.75s 1 forwards',
        'spin': 'spin 1s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spotlight: {
          '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: '1', transform: 'translate(-50%, -40%) scale(1)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
