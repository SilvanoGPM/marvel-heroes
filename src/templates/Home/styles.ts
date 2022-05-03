import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 70rem;
  margin: auto;
`;

export const Header = styled.header`
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `0 ${theme.sizes.medium}`};
`;

export const Main = styled.main``;

export const HeadingContainer = styled.section`
  padding: ${({ theme }) => theme.sizes.medium};
`;

export const HomeTitle = styled.h1`
  font-weight: ${({ theme }) => theme.fonts.homeTitle.weight};
  font-size: ${({ theme }) => theme.fonts.homeTitle.size};
  line-height: ${({ theme }) => theme.fonts.homeTitle.size};
`;

export const HomeSubtitle = styled.h3`
  font-weight: ${({ theme }) => theme.fonts.homeSubtitle.weight};
  font-size: ${({ theme }) => theme.fonts.homeSubtitle.size};
  line-height: ${({ theme }) => theme.fonts.homeSubtitle.size};
  color: ${({ theme }) => theme.colors.primaryGrey};
  margin-bottom: ${({ theme }) => `calc(${theme.sizes.small} / 2)`};
`;
