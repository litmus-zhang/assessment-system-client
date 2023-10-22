/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif']
      },
      colors: {
        'bg': {
          1: '#F2F2F2',
          2: '#E6F7D5',
        
        },
        'grey': {
          0: '#000000',
          10: '#1E1E1E',
          20: '#302F2F',
          50: '#757373',
          70: '#B8B5B5',
          80: '#D6D5D5',
          90: '#E4E4E4',
          100: '#FFFFFF',
        },
        'visor': {
          primary: '#0D5183',
          secondary: "#83E9FF"
        }
      }
    },
  },
  plugins: [],
}