const light = {
  homeBgFirstPart: "#0e6677",
  homeColorFirstPart: "#ffffff",
  homeBgSecondPart: "#ffffff",
  homeColorSecondPart: "#0f1727",
  homeBgThirdPart: "#f5f5f5",
  homeColorThirdPart: "#0f1727",
  logoBg: "#0e6677",
  logoColor: "#ffffff",
  arrowColorFirstPart: "#ffffff",
  arrowColorSecondPart: "#0f1727",
  buttonBg: "#f5f5f5",
  aboutPage: "#0e6677",
  blogsPageBg: "#ffffff",
  contactPageBg: "#ffffff",
  contactPageCard: "#0e6677"
};

const dark = {
  homeBgFirstPart: "#0f1727",
  homeColorFirstPart: "#ffffff",
  homeBgSecondPart: "#040a18",
  homeColorSecondPart: "#ffffff",
  homeBgThirdPart: "#0f1727",
  homeColorThirdPart: "#ffffff",
  logoBg: "#ffffff",
  logoColor: "#0f1727",
  arrowColorFirstPart: "#ffffff",
  arrowColorSecondPart: "#ffffff",
  buttonBg: "#D8D8D8",
  aboutPage: "#0f1727",
  blogsPageBg: "#f5f5f5",
  contactPageBg: "#D8D8D8",
  contactPageCard: "#040a18"
};

const defaultTheme = {
  space: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  fontSizes: [15, 20, 25, 30, 35, 40, 45, 50, 55],
  fontWeights: [300, 400, 500, 600, 700, 800, 900],
  breakpoints: ["480px", "850px", "1024px", "1260px"]
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };
