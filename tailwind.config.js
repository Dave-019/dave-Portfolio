/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    
    
    extend: {keyframes: {
      'fade-in-down': {
          '0%': {
              opacity: '0',
              transform: 'translateY(-10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
      }
  },
  animation: {
      'fade-in-down': 'fade-in-down 0.5s ease-out'
  },
  hidden1:{
    'display':'none'
},
  visible:{
    'display':'block'
  }

  },
  plugins: [],
  },}

