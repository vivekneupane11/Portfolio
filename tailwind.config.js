/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'darkPrimary': '#1A120B',
        'darkSecondary': '#3C2A21',
        'darkText': '#D5CEA3',
        'darkSubtext': '#E5E5CB',
        'link':'#7149C6',
        'red':'red'
     
      },
    extend: {},
  },
  plugins: [],
  darkMode:'class'
}
