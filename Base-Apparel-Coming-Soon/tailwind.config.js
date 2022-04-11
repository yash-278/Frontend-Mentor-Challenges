module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        DesaturatedRed: "hsl(0, 36%, 70%)",
        SoftRed: " hsl(0, 93%, 68%)",
        DarkGrayishRed: "hsl(0, 6%, 24%)",
        LinearWhite: "hsl(0, 0%, 100%)",
        LinearVeryLightPink: "hsl(0, 100%, 98%)",
        LinearSlightPink: "hsl(0, 80%, 86%)",
        LinearPink: "hsl(0, 74%, 74%)",
      },
      backgroundImage: {
        heroDesktop: "url('../images/hero-desktop.jpg')",
        heroMobile: "url('../images/hero-mobile.jpg')",
        logo: "url('../images/logo.svg')",
        iconArrow: "url('../images/icon-arrow.svg')",
        desktopBg: "url('../images/bg-pattern-desktop.svg')",
      },
    },
    fontFamily: {
      josefin: ["'Josefin Sans'", "sans-serif"],
    },
  },
  plugins: [],
};
