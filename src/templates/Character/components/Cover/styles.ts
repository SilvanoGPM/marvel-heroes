import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: ${({ theme }) => `${theme.sizes.medium} 0`};
  padding: ${({ theme }) => theme.sizes.small};
`;

export const CoverItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 48px;
  width: 60px;
  color: ${({ theme }) => theme.colors.primaryWhite};
  font-size: ${({ theme }) => theme.fonts.abilitly.size};
  font-weight: ${({ theme }) => theme.fonts.abilitly.weight};
`;
