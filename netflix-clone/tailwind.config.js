
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
          'fade-in': {
             '0%': { opacity: '0', transform: 'scale(0.5)'},
             '100%': { opacity: '1', transform: 'scale(1.3) ' },
             },
          },
    animation: {
      'fade-in': 'fade-in 0.3s ease-out',
    },
  },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

