/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@shadcn/ui/**/*.js', // Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
