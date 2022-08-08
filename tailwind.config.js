/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'xs': '300px',
      'sm':'400px',
      'md':'624px',
      'lg':'767px',
      'xl':'992px',
      '2xl':'1200px',
      '3xl':'1300px',
    }
  },
  plugins: [],
}
