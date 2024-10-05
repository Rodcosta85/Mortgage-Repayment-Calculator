/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/App.jsx",
    "./src/WHITE DIV/TITLE/*.jsx",
    "./src/WHITE DIV/AMOUNT/*.jsx",
    "./src/WHITE DIV/TERM/*.jsx",
    "./src/WHITE DIV/RATE/*.jsx",
    "./src/WHITE DIV/TYPE/*.jsx",
    "./src/WHITE DIV/BUTTON/*.jsx",
    "./src/BLUE DIV/RESULT DIV/*.jsx"
    
    // here you can add the sources of other components as well. A dedicated css page is no longer needed
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans'],
      }, 
      colors: {
        'paragraph-gray': '#acb7bb', 
        'dark-gray': '#394448',
        'booger-green': '#d9da2f',
        'puma-blue': '#0e2431'
      },
      backgroundColor: {
        'light-booger-green': '#ebebc5'
      }
    },
  },
  plugins: [],
}

