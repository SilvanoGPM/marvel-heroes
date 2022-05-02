import styled from 'styled-components';

export type CardProps = {
  image: string;
};

export const Card = styled.div<CardProps>`
  overflow: hidden;
  min-width: 140px;
  width: 140px;
  height: 230px;
  background-position: center center, 100%, 100%;
  background-size: 100% 100%, 100%, 100%;
  background-image: linear-gradient(transparent 0%, rgba(0, 0, 0, 0.7) 100%),
    ${({ image }) => `url(${image})`};
  background-repeat: no-repeat, no-repeat;
  border-radius: ${({ theme }) => theme.sizes.small};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.sizes.small};
  cursor: pointer;
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fonts.cardTitle.size};
  line-height: ${({ theme }) => theme.fonts.cardTitle.size};
  font-weight: ${({ theme }) => theme.fonts.cardTitle.weight};
  color: ${({ theme }) => theme.colors.primaryWhite};
`;

export const AlterEgo = styled.p`
  font-size: ${({ theme }) => theme.fonts.cardSubtitle.size};
  line-height: ${({ theme }) => theme.fonts.cardSubtitle.size};
  font-weight: ${({ theme }) => theme.fonts.cardSubtitle.weight};
  color: ${({ theme }) => theme.colors.primaryWhite};
  opacity: 0.75;
`;
