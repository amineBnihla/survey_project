/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
        colors:{
            primary:"#152B79",
            secondary:"#E95D2C",
            wht : "#FCFCFC",
            blck:"#303030"
        },
        fontFamily:{
            Poppins:["Poppins","sans-serif"]
        },
        fontSize:{
  base: ["clamp(0.875rem, 0.8125rem + 0.25vw, 1rem)","1.5"],
  lg: ["clamp(1.25rem, 1.125rem + 0.5vw, 1.5rem)","1.5"],
  xl: ["clamp(1.58rem, calc(1.46rem + 0.59vw), 1.88rem)","1.4"],
  "2xl": ["clamp(1.875rem, 1.6875rem + 0.75vw, 2.25rem);","1"],
  "3xl": ["clamp(2.27rem, calc(2.01rem + 1.29vw), 2.93rem)","1"],
  "4xl": ["clamp(3rem, 2.6875rem + 1.25vw, 3.625rem)","1"],

        }
    },
  },
  plugins: [],
}
