const BASE_COLORS = {
  white: "rgba(255, 255, 255, 1)",
  black: "rgba(0, 0, 0, 1)"
};

const themeColor = {
  headings: {
    color: BASE_COLORS.white,
    background: BASE_COLORS.black
  }
};
export type themeType = typeof themeColor;

export default {
  colors: themeColor,
  space: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  fontSizes: [15, 20, 25, 30, 35, 40, 45, 50, 55],
  fontWeights: [300, 400, 500, 600, 700, 800, 900],
  breakpoints: ["480px", "850px", "1024px", "1260px"]
};
