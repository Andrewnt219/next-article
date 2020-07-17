import { createMuiTheme } from "@material-ui/core";
import { DefaultTheme } from "styled-components";

const HEADER_FONT = " 'Montserrat', sans-serif";
const muiTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 300,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#13AA52",
    },
    secondary: {
      main: "#E9B15C",
    },
  },
  typography: {
    h1: {
      fontFamily: HEADER_FONT,
    },
    h2: {
      fontFamily: HEADER_FONT,
    },
    h3: {
      fontFamily: HEADER_FONT,
    },
    h4: {
      fontFamily: HEADER_FONT,
    },
    h5: {
      fontFamily: HEADER_FONT,
    },
    h6: {
      fontFamily: HEADER_FONT,
    },
  },
});

export const defaultTheme: DefaultTheme = {
  ...muiTheme,
};
