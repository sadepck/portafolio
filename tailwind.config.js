/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steampunk: {
          brass: '#B5A642',
          copper: '#B87333',
          bronze: '#CD7F32',
          rust: '#8B4513',
          dark: '#1a1a1a',
          darker: '#0d0d0d',
          leather: '#8B4513',
          gold: '#D4AF37',
          cream: '#F5DEB3',
          iron: '#48494B',
        }
      },
      fontFamily: {
        steampunk: ['Steampunk', 'serif'],
      },
      backgroundImage: {
        'gear-pattern': "url('/src/assets/gear-pattern.svg')",
      }
    },
  },
  plugins: [],
}
