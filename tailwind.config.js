const colors = require('tailwindcss/colors'); 

module.exports = {
  content: ["./index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      clors:{
        orange: colors.orange,
        tel:colors.teal,
        "light blue": colors.lightBlue,
      },
    },
  },
  plugins: [],
}
