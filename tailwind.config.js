import { transform } from 'typescript'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
      animation: {
        blur: 'blur 10s ease-in-out infinite',
      },
      keyframes: {
        blur: {
          '0%, 100%': { filter: 'blur(2px)', transform: 'scale(1.10) rotate(1deg)' },
          '50%': { filter: 'blur(1px)', transform: 'scale(1.15)' },
        },
      },
    },
  },
  plugins: [],
}
