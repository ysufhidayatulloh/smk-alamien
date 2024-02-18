/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
        contentContainer: "1140px",
        containerSmall: "1024px",
        containerxs: "768px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["var(--font-poppins)"],
        titleFont: ["var(--font-montserrat)"],
      },
      colors: {
        primary: "#0D6343",
        secondary: "#FFBD00",
        lightGreen: "#347B61",
        lightGray: "#272D4E",
        lightGrayAlt: "#94A2B3",
        textLight: "#ccd6f6",
        textDark: "#8892b0",
        solitude: "#e9e9ea",
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px #0D6343",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
