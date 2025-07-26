/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coat: {
          bg: "#f3f6fa", // soft pastel blue
          text: "#2c2c2c",
          heading: "#1a1a1a",
          accent: "#748cab",
          lightGray: "#d4d4d4",
        },
      },
      backgroundImage: {
        'pattern': "url('/pattern.svg')",
      },
    },
  },
  plugins: [],
}
