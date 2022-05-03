import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => `0 ${theme.sizes.small}`};

  @media screen and (max-width: 350px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.sizes.small};
  }
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fonts.abilitly.size};
  line-height: ${({ theme }) => theme.fonts.abilitly.size};
  font-weight: ${({ theme }) => theme.fonts.abilitly.weight};
  color: ${({ theme }) => theme.colors.primaryWhite};
  opacity: 0.75;
  width: 100px;
`;

export const Bar = styled.div`
  display: flex;
  align-items: center;
  height: 12px;
  gap: 4px;
  flex: 1;
`;

export const Point = styled.div`
  width: 1px;
  height: 8px;
  background-color: white;
  opacity: 0.25;

  &.show {
    opacity: 1;
  }

  &.total {
    height: 12px;
  }
`;
