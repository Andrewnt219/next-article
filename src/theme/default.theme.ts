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
      primary: "#4361ee",
      secondary: "#7209b7",
    },
    primary: {
      main: "#4361ee",
    },
    secondary: {
      main: "#7209b7",
    },
    error: {
      main: "#ff0054",
    },
  },
});

export const defaultTheme: DefaultTheme = {
  ...muiTheme,
};
