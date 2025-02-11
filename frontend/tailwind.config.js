/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#3f1ef8',
        'secondary-color': '#3f1ef8',
        'tertiary-color': '#e74c3c',
      }
    },
  },
  plugins: [],
}

