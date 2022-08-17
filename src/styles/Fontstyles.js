import { createGlobalStyle } from "styled-components"
import PoppinsRegular from "../../static/fonts/Poppins-Regular.woff2"
import PoppinsBold from "../../static/fonts/Poppins-Bold.woff2"

const FontStyles = createGlobalStyle`

@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(${PoppinsRegular}) format("woff2");
}

@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(${PoppinsBold}) format("woff2");
}

body {
  font-family: "Poppins";
  font-weight: 400;
  margin: 0;
  padding: 0;
}

`

export default FontStyles
