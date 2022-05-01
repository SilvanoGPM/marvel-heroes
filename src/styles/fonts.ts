import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/gilroy-regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/gilroy-medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/gilroy-semibold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/gilroy-bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/gilroy-heavy.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }
`;

export default FontStyles;
