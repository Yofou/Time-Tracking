import { defineConfig } from 'vite-plugin-windicss'
import plugin from 'windicss/plugin'

export default defineConfig({
    attributify: true,
    theme: {
        colors: {
            blue: {
                100: "#7078C9",
                300: "#5747EA",
                600: "#1C204B",
                900: "#0E1323",
            },
            white: '#FFFFFF'
        },
        extend: {
            fontFamily: {
                rubik: ["Rubik", "sans-serif"]
            },
            screens: {
                sm: '700px'                 
            },
        }
    },
    plugins: [
        plugin(({ addUtilities }) => {
            const utils = {
                '.grid-\\$area': {
                    gridArea: 'var(--area)'
                }
            }

            addUtilities(utils)
        }),
        plugin(({ addDynamic, variants }) => {
            addDynamic('grid-area', ({ Utility }) => {
                return Utility.handler
                    .handleString(value => value.slice(5))
                    .createProperty('grid-area')
            }, variants('grid-area'))
        }),
        plugin(({ addVariant }) => {
            addVariant('selection', ({ modifySelectors }) => {
                return modifySelectors(({ className }) => {
                    return `.${className}::selection`
                })
            })
        })
    ]
})