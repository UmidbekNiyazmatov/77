/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        '450px': '450px', // Custom breakpoint
      },
      colors:{
        customWhite: '#FFFFFF',
        modalColor: 'rgba(0, 0, 0, 0.5);'
        
      }
    },
  },
  plugins: [],
}

