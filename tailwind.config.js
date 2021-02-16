module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: [`'Montserrat', sans-serif`],
        roboto: [`'Roboto', sans-serif`],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
