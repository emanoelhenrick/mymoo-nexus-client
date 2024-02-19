import { createStitches } from "@stitches/react"

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  css,
  createTheme
} = createStitches({
  theme: {
    colors: {
      white: '#f5f5f5',
      white300: '#BBC2C4',
      gray600: '#171e28',
      gray700: '#111820',
      primary: '#EF5A46'
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    }
  },
  media: {
    media2: '(max-width: 1024px)',
    media3: '(max-width: 1280px and min-width: 1024)'
  }
})

