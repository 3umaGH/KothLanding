/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dm: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        blur: 'blur 10s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        blur: {
          '0%, 100%': { filter: 'blur(2px)', transform: 'scale(1.10) rotate(1deg)' },
          '50%': { filter: 'blur(1px)', transform: 'scale(1.15)' },
        },
        glow: {
          '0%, 100%': { filter: 'brightness(130%)' },
          '50%': { filter: 'brightness(80%)' },
        },
      },
    },
  },
  plugins: [],
}
