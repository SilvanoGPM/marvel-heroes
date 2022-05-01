import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/gilroy-regular.ttf') format('truetype');
    font-weight: normal
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/gilroy-medium.ttf') format('truetype');
    font-weight: medium;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/gilroy-semibold.ttf') format('truetype');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/gilroy-bold.ttf') format('truetype');
    font-weight: bold;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/gilroy-heavy.ttf') format('truetype');
    font-weight: bolder;
  }
`;

export default FontStyles;
