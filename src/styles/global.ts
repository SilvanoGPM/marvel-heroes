import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ::selection {
    background-color: ${({ theme }) => theme.colors.primaryRed};
    color: ${({ theme }) => theme.colors.primaryWhite};
  }

  * {
    margin: 0;
    padding: 0%;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    color: ${({ theme }) => theme.colors.primaryDark};
    background-color: ${({ theme }) => theme.colors.primaryWhite};
  }

  #__next {
    max-width: 70rem;
    margin: auto;
  }

  body {
    font-family: 'Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: normal;
  }

  p, a {
    font-size: 2rem;
    line-height: ${({ theme }) => theme.sizes.medium};
  }

  a {
    color: ${({ theme }) => theme.colors.primaryRed};
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }
`;
