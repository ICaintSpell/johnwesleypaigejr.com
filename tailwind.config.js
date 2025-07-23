// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,md}",
    "./_layouts/*.html",
    "./_includes/*.html",
    "./_posts/*.md",
  ],
  theme: {
    extend: {
      colors: {
        'coat-black': '#1F1F1F',
        'coat-gold': '#D4AF37',
        'coat-pink': '#E8B5B7',
        'coat-green': '#3B6E3B',
        'coat-light-gray': '#D3D3D3',
        'coat-white': '#F8F8F8',
      }
    },
  },
  plugins: [],
}
