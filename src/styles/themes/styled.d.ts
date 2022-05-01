import 'styled-components';

declare module 'styled-components' {
  export type ThemeFont = { size: string; weight: string };

  export interface DefaultTheme {
    colors: {
      primaryRed: string;
      primaryBlack: string;
      primaryDark: string;
      primaryGrey: string;
      primarySilver: string;
      primaryWhite: string;
    };

    zIndexes: {
      one: number;
      dropdown: number;
      fixed: number;
      modal: number;
    };

    fonts: {
      profileTitle: ThemeFont;
      homeTitle: ThemeFont;
      cardTitle: ThemeFont;
      sectionTitle: ThemeFont;
      profileSubtitle: ThemeFont;
      homeSubtitle: ThemeFont;
      description: ThemeFont;
      caracterisct: ThemeFont;
      abilitly: ThemeFont;
      cardSubtitle: ThemeFont;
    };

    sizes: {
      small: string;
      medium: string;
      large: string;
      container: string;
    };
  }
}
