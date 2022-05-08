module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: { epilogue: ["Epilogue", "sans-serif"] },
    extend: {
      colors: {
        AlmostWhite: "hsl(0, 0%, 98%)",
        MediumGray: "hsl(0, 0%, 41%)",
        AlmostBlack: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
