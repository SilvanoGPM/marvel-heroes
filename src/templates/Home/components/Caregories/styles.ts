import styled from 'styled-components';

export type ItemProps = {
  from: string;
  to: string;
};

export const List = styled.ul`
  padding: ${({ theme }) => `0 ${theme.sizes.medium}`};
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.sizes.medium};
`;

export const Item = styled.li<ItemProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ from }) => from};
  background-image: ${({ from, to }) =>
    `linear-gradient(180deg, ${from} 0%, ${to} 100%)`};
`;
