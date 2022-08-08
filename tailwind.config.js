/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'xs': '200px',
      'sm':'400px',
      'md':'624px',
      'lg':'768px',
      'xl':'992px',
      '2xl':'1200px',
    }
  },
  plugins: [],
}
