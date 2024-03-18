/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*","./src/**"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('./assets home3/slider-03.jpg.png')",
        
      },
      fontFamily:{
          Inter:["'Inter', sans-serif"]
      },
    },
  },
  plugins: [],
}

