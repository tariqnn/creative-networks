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
        'bg-main': '#020617',
        'bg-dark': '#0B0330',
        'bg-light': '#F7F7FB',
        'accent-primary': '#00A8E8',
        'accent-secondary': '#9D00FF',
        'accent-success': '#0AFF9D',
        'accent-testimonial': '#36D44A',
        'text-primary': '#FFFFFF',
        'text-secondary': '#C7CEDA',
        'text-dark': '#020617',
        'gradient-purple': '#1E1B4B',
        'gradient-dark': '#0F172A',
      },
      fontFamily: {
        'heading': ['var(--font-space-grotesk)', 'sans-serif'],
        'body': ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'scroll': 'scroll 30s linear infinite',
        'hero-gradient': 'hero-gradient 18s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        scroll: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
        'hero-gradient': {
          '0%, 100%': {
            transform: 'translate3d(0,0,0) scale(1)',
          },
          '50%': {
            transform: 'translate3d(-10px, 10px, 0) scale(1.05)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(-2px)',
          },
          '50%': {
            transform: 'translateY(2px)',
          },
        },
        shimmer: {
          '0%': {
            'background-position': '-200% 0',
          },
          '100%': {
            'background-position': '200% 0',
          },
        },
      },
      transitionDelay: {
        '1000': '1000ms',
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
}
export default config

