const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   lg: "976px",
    //   xl: "1440px",
    // },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: {
        DEFAULT: "#969696",
        dark: "#2b2b2b",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    fontFamily: false,
  },
};
