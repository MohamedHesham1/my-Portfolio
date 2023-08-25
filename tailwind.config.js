/** @type {import('tailwindcss').Config} */
const { withAnimations } = require('animated-tailwindcss');

module.exports = withAnimations({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: { max: '480px' },
      md: { max: '767px' },
      lg: { max: '976px' },
      xl: '1440px',
    },
    colors: {
      primary: '#f0f8ff',
      secondary: '#f4a949',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
});
