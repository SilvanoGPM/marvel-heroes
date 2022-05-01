import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  colors: {
    primaryRed: '#F2264B',
    primaryBlack: '#000000',
    primaryDark: '#313140',
    primaryGrey: '#B7B7C8',
    primarySilver: '#F8F8F8',
    primaryWhite: '#FFFFFF',
  },

  gradients: {
    blue: { from: '#005BEA', to: '#00C6FB' },
    red: { from: '#ED1D24', to: '#ED1F69' },
    purple: { from: '#B224EF', to: '#7579FF' },
    green: { from: '#0BA360', to: '#3CBA92' },
    pink: { from: '#FF7EB3', to: '#FF758C' },
    black: { from: '#000000.0', to: '#000000' },
    dark: { from: '#000000.0', to: '#000000' },
  },

  zIndexes: {
    one: 1,
    dropdown: 1000,
    fixed: 1100,
    modal: 1200,
  },

  fonts: {
    profileTitle: { size: '4rem', weight: '900' },
    homeTitle: { size: '3.2rem', weight: '900' },
    cardTitle: { size: '2rem', weight: '900' },
    sectionTitle: { size: '1.8rem', weight: '700' },
    profileSubtitle: { size: '1.6rem', weight: '500' },
    homeSubtitle: { size: '1.4rem', weight: '600' },
    description: { size: '1.4rem', weight: '500' },
    caracterisct: { size: '1.2rem', weight: '500' },
    abilitly: { size: '1.2rem', weight: '400' },
    cardSubtitle: { size: '1rem', weight: '500' },
  },

  sizes: {
    small: '1.5rem',
    medium: '3rem',
    large: '5rem',
    container: '100rem',
  },
};
