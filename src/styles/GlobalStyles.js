import { createGlobalStyle } from "styled-components";
import OpenSansBold from "fonts/OpenSans-Bold.ttf";
import OpenSansRegular from "fonts/OpenSans-Regular.ttf";
import OswaldBold from "fonts/Oswald-Bold.ttf";
import OswaldRegular from "fonts/Oswald-Regular.ttf";

export const fonts = {
  base: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
};

export const breakpoint = {
  deviceMin768Max992:
    "@media screen and (min-width:768px) and (max-width: 992px)",
  deviceMax768: "@media screen and (max-width: 768px)",
  deviceMax992: "@media screen and (max-width: 992px)",
};

export const Colors = {
  white: "#eff5f8",
  gray: "#b2c7cf",
  black: "#0c1010",
  darkGray: "#575c5b",
  lightGray: "#808b97",
};
export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "OpenSans";
  src: url(${OpenSansBold}) format("truetype");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "OpenSans";
  src: url(${OpenSansRegular}) format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Oswald";
  src: url(${OswaldBold}) format("truetype");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "Oswald";
  src: url(${OswaldRegular}) format("truetype");
  font-weight: 400;
  font-style: normal;
}
html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding: 0;
  }

  h1,p{
    font-family:OpenSans;
  }

  h3{
    font-family: Oswald;
  }

  ul {
    list-style: none;
  }
  body {
    width: 100%;
    font-family:${fonts.base};
    background-color: ${Colors.lightGray};
    
  }
  #root{
    width: 100%;
    height:100%;
  }  
`;
