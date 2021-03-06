import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
      src: url('/fonts/Roboto-Bold.ttf');
      src: url('/fonts/Roboto-Light.ttf');
      src: url('/fonts/Roboto-Italic.ttf');
      src: url('/fonts/Roboto-Medium.ttf');
      src: url('/fonts/Roboto-Regular.ttf');
  }

  @font-face {
    font-family: 'Montserrat';
      src: url('/fonts/Montserrat-Bold.ttf');
      src: url('/fonts/Montserrat-Light.ttf');
      src: url('/fonts/Montserrat-Medium.ttf');
      src: url('/fonts/Montserrat-Regular.ttf');
  }
  
  :root {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    overflow-x:hidden;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.values.xs}px) {
      font-size: 75%; /* 16px => 12px */
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.values.sm}px) {
      font-size: 81.25%; /* 16px => 13px */
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.values.md}px) {
      font-size: 87.5%; /* 16px => 14px */
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.values.lg}px) {
      font-size: 93.75%; /* 16px => 15px */
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.values.xl}px) {
      font-size: 100%; /* 16px => 16px */
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Montserrat', sans-serif;
  }


  p {
    
    line-height: 1.6;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    text-decoration: none;
    list-style: none;

    font-family: inherit;
  }

  input,
  select,
  textarea {
    font-size: inherit;
    font-family: inherit;
    background: transparent;
  }

  #__next {
    min-height: 100vh;
    position: relative;
  }

`;
