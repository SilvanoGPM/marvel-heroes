import styled from 'styled-components';

export const Header = styled.header`
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `0 ${theme.sizes.medium}`};
`;
