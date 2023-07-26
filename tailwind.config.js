/** @type {imort('tailwindcss').config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    purge: {
        preserveHtmlElements: false,
        content: ['./*.html,.js'],
    },
    darkmode: false,
    content: ["./**/*.{html,js}"],

    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'Lato',
                    ...defaultTheme.fontFamily.sans,
                ],
                orchideel: ['ORCHIDEEL', "cursive"],
                orchideem: ['ORCHIDEEM', "cursive"],
            },
            colors: {
                'orange-pastel': '#FF912C',
                'marron-pastel': '#23201E'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        // require('@tailwindcss/forms'),
        // require('@tailwindcss/typography'),
        // require('@tailwindcss/aspect-ratio'),
        // require('tailwindcss-children')
    ],
}