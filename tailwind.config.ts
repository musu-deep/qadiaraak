import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060d18',
          900: '#0b1f3a',
          800: '#112a4a',
          700: '#1a3a63',
        },
        gold: {
          50: '#fbf6e9',
          100: '#f6ebc9',
          200: '#eed99a',
          300: '#e3c066',
          400: '#c9a24b',
          500: '#b8893a',
          600: '#9a6f2e',
          700: '#7a5626',
          800: '#5e4220',
          900: '#4a341d',
        },
      },
      fontFamily: {
        display: ['Tajawal', 'IBM Plex Sans Arabic', 'sans-serif'],
        sans: ['IBM Plex Sans Arabic', 'Tajawal', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
