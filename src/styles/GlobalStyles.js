import { createGlobalStyle } from "styled-components";
import OxygenBold from "Fonts/Oxygen-Bold.ttf";
import OxygenRegular from "Fonts/Oxygen-Regular.ttf";

export const fonts = {
  base: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
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
  font-family: "Oxygen";
  src: url(${OxygenBold}) format("truetype");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "Oxygen";
  src: url(${OxygenRegular}) format("truetype");
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
  ul {
    list-style: none;
  }
  body {
    width: 100%;
    font-family:${fonts.base};
    
  }
  #root{
    width: 100%;
    height:100%;
  }  
`;
