/** @type {import('tailwindcss').config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    purge: {
        preserveHtmlElements: false,
        content: ['./src/**/*{.html,.js,.jsx}'],
    },
    darkmode: false,
    content: { relative: true, files: ['./src/**/*{.html,.js,.jsx}'] },
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
        // require('tailwindcss-children'),
        // require('@tailwindcss/line-clamp@latest')
    ],
}