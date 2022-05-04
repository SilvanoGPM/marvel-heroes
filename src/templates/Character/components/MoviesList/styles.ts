import styled from 'styled-components';

export const Container = styled.div``;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.small};
  overflow: auto;
  padding: ${({ theme }) => `0 ${theme.sizes.small}`};
  padding-bottom: ${({ theme }) => theme.sizes.medium};
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

export const MovieItem = styled.img`
  height: 230px;
  width: 156px;
  border-radius: ${({ theme }) => theme.sizes.small};
`;
