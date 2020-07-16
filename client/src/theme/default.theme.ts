import { createMuiTheme } from '@material-ui/core';
import { DefaultTheme } from 'styled-components';

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
});

export const defaultTheme: DefaultTheme = {
  ...muiTheme,
};
