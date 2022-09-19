/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    theme: {
    extend: {
      fontFamily: {
        DM_Sans:['DM_Sans', 'sans-serif']
      }
    },
  }
}
}
