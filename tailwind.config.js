/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
