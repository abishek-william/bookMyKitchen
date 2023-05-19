/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#D61355',
        'secondary' : '#F94A29',
        'secondary-two' : '#FF6D60'
      }
    },
  },
  plugins: [],
}

