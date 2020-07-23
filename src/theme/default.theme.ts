import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { DefaultTheme } from "styled-components";

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
    text: {
      primary: "#0E8640",
      secondary: "#2064a5",
    },
    primary: {
      main: "#13AA52",
    },
    secondary: {
      main: "#2F80ED",
    },
  },
});

export const defaultTheme: DefaultTheme = {
  ...muiTheme,
};
