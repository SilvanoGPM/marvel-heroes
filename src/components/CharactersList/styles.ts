import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `0 ${theme.sizes.medium}`};
  margin-bottom: ${({ theme }) => theme.sizes.small};
`;

export const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.primaryRed};
  font-size: ${({ theme }) => theme.fonts.sectionTitle.size};
  font-weight: ${({ theme }) => theme.fonts.sectionTitle.weight};
`;

export const ViewAll = styled.span`
  color: ${({ theme }) => theme.colors.primaryGrey};
  font-size: ${({ theme }) => theme.fonts.description.size};
  font-weight: ${({ theme }) => theme.fonts.description.weight};
  cursor: pointer;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.small};
  overflow: auto;
  padding: ${({ theme }) => `0 ${theme.sizes.medium}`};
  margin-bottom: ${({ theme }) => theme.sizes.medium};
  scrollbar-width: none;
  scrollbar-color: none;

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: none;
    border-radius: 0;
    border: none;
  }
`;
