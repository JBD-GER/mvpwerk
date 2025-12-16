// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // scannt wirklich alle TS/JSX/TSX/JS unter src/
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {

      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing:      { 1: '0.25rem', 2: '0.5rem', 4: '1rem', 6: '1.5rem', 8: '2rem' },
      borderRadius: { DEFAULT: '0.5rem' },
      boxShadow:    { sm: '0 1px 3px rgba(0,0,0,0.1)', DEFAULT: '0 1px 2px rgba(0,0,0,0.1)' },
    },
  },
  plugins: [

  ],
}
