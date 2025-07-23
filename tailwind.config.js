/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        coat: {
          heading: '#1E40AF', // blue-800
          text: '#374151',    // gray-700
          accent: '#FBBF24',  // yellow-400
        },
      },
    },
  },
  plugins: [],
}
