/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        wedding: {
          50: '#fffdfa',
          100: '#fcf3ec',
          200: '#e8d6c8',
          300: '#d4baab',
          400: '#b58c7c',
          500: '#8b2635',
          600: '#6e1b27',
          700: '#4a3b32',
          800: '#362a22',
          900: '#241b15',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        script: ['Great Vibes', 'cursive'],
      },
      animation: {
        blob: "blob 15s infinite alternate",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        }
      }
    },
  },
  plugins: [],
}
