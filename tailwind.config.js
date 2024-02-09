/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*","./src/**"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('./assets/slider.png')",
        
      },
      fontFamily:{
          Inter:["'Inter', sans-serif"]
      },
    },
  },
  plugins: [],
}

