const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["tt-commons-pro", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      white: "#FFF",
      black: "#25312F",
      transparent: "transparent",
      //
      neutral: "#FAFAFA",
      forest: { DEFAULT: "#4D887D", dark: "#2F5E53", pale: "#A3C1BB" },
      latte: "#F1E9D0",
      "brown-sugar": "#D89463",
      emerald: "#294740",
      gray: {
        light: "#D9D9D9",
        DEFAULT: "#595959",
      },
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
}
