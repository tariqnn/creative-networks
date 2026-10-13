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
          DEFAULT: '#E8EDF1',
          50: '#123452',
          100: '#244663',
          200: '#405C74',
          300: '#526C82',
          400: '#526C82',
          500: '#667E90',
          600: '#7B8D9A',
          700: '#C8D3DC',
          800: '#D7E0E7',
          900: '#E1E8ED',
          950: '#EEF2F5',
        },
        accent: {
          DEFAULT: '#123A5B',
          light: '#285273',
          dark: '#092B46',
        },
        cyan: {
          DEFAULT: '#A5AAAF',
          light: '#BEC3C8',
          dark: '#858D94',
        },
        emerald: {
          DEFAULT: '#8F989F',
          light: '#AAB1B7',
          dark: '#737D85',
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
