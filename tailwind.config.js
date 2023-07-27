/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./"
  ],
  theme: {
    extend: {
      fontFamily: {
        orchideel: ['ORCHIDEEL', "cursive"],
        orchideem: ['ORCHIDEEM', "cursive"],
      },
      colors: {
        'orange-pastel': '#FF912C',
        'marron-pastel': '#23201E'
      }
    },
  },
  plugins: [

  ]
}
