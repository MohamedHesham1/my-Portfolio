/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#f0f8ff',
      secondary: '#f4a949',
    },
    extend: {},
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [],
};
