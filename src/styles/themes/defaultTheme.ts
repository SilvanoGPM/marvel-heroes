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

  zIndexes: {
    one: 1,
    dropdown: 1000,
    fixed: 1100,
    modal: 1200,
  },

  fonts: {
    profileTitle: { size: '4rem', weight: 'heavy' },
    homeTitle: { size: '3.2rem', weight: 'heavy' },
    cardTitle: { size: '2rem', weight: 'heavy' },
    sectionTitle: { size: '1.8rem', weight: 'bold' },
    profileSubtitle: { size: '1.6rem', weight: 'medium' },
    homeSubtitle: { size: '1.4rem', weight: 'semibold' },
    description: { size: '1.4rem', weight: 'medium' },
    caracterisct: { size: '1.2rem', weight: 'medium' },
    abilitly: { size: '1.2rem', weight: 'regular' },
    cardSubtitle: { size: '1rem', weight: 'medium' },
  },

  sizes: {
    small: '1.5rem',
    medium: '3rem',
    large: '5rem',
    container: '100rem',
  },
};
