/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        radialPink: 'radial-gradient(700.79%_220.74%_at_-34.85%_-44.16%,#B92C98_2.08%,#D50283_52.6%,#FC466B_100%)',
      },
      screens: {
        mobile: '375px',
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
        desktopLg: '1440px',
      },
    },
  },
  plugins: [],
};
