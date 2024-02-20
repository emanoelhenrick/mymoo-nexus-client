import { globalCss } from ".";

export const globalStyles = globalCss({
  html: {
    'scroll-behavior': 'smooth',
    fontSize: '16px',
  },

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    width: 'auto',
    backgroundColor: '#111820',
    color: "#000",
    overflowX: 'hidden',
    fontSmooth: 'always',
    userSelect: 'none',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',

    '@media2': {
      width: 'max-content',

      'li': {
        animation: 'none !important'
      }
    }
  },

  'body, input, textarea, button': {
    fontFamily: 'sans-serif',
    fontWeight: 400,
  },

  '.react-reveal': {
    '@media2': {
      animation: 'none !important',
      opacity: '1 !important'
    }
  },

  
})