/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "top-section": "url('/assets/home/header.png')",
        "second-section": "url('/assets/home/blue-bg-second-section.svg')",
        login: "url('/assets/login-bg.png')",
      },
      boxShadow: {
        footer: "0px 2px 4px 0px rgba(14,30,37,0.12), 0px 2px 16px 0px rgba(14,30,37,0.32)",
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        label: ["var(--font-montserrat)"],
      },
      colors: {
        facebook: "#4267B2",
        primary: {
          blue: "#1053B7",
          black: "#050D18",
        },
        secondary: {
          yellow: "#EBA41F",
          red: "#EB1F2B",
        },
        color: {
          primary: "#050D18",
          secondary: "#50555D",
        },
        yellow: {
          10: "#FDF5E8",
          30: "#F9E3BB",
          50: "#F5D18F",
          70: "#F1BF62",
          100: "#EBA41F",
        },
        red: {
          10: "#FDE8E9",
          30: "#F9BBBF",
          50: "#F58F95",
          70: "#F1626A",
          100: "#EB1F2B",
        },
        blue: {
          10: "#E7EDF7",
          30: "#B7CBE9",
          50: "#87A9DB",
          70: "#5786CC",
          100: "#1053B7",
        },
        gray: {
          10: "#E6E6E7",
          30: "#B4B6B9",
          50: "#82868B",
          70: "#50555D",
          100: "#050D18",
        },
      },
    },
  },
  plugins: [],
};
