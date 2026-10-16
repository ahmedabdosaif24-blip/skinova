/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'skinova-forest': '#183D32',
        'skinova-emerald': '#102B24',
        'skinova-gold': '#C8A96B',
        'skinova-ivory': '#F7F2E9',
        'skinova-beige': '#E6D8C5',
        'skinova-white': '#FFFFFF',
        'skinova-charcoal': '#242724',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}
