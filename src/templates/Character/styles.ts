import styled from 'styled-components';

type BannerProps = {
  image: string;
};

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.primaryBlack};
  width: 100%;
  height: 200vh;
`;

export const GoBack = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: ${({ theme }) => theme.sizes.medium};
  left: ${({ theme }) => theme.sizes.small};
`;

export const Spacer = styled.div`
  margin-top: 25rem;
  width: 0;
`;

export const Banner = styled.div<BannerProps>`
  background-position: center center, top bottom;
  background-size: 100% 100%, 100%;
  background-image: linear-gradient(transparent 40%, rgba(0, 0, 0, 0.98) 80%),
    ${({ image }) => `url(${image})`};
  background-repeat: no-repeat, no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.sizes.small};
`;

export const AlterEgo = styled.p`
  font-size: ${({ theme }) => theme.fonts.cardSubtitle.size};
  line-height: ${({ theme }) => theme.fonts.cardSubtitle.size};
  font-weight: ${({ theme }) => theme.fonts.cardSubtitle.weight};
  color: ${({ theme }) => theme.colors.primaryWhite};
  opacity: 0.75;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primaryWhite};
  font-size: ${({ theme }) => theme.fonts.profileTitle.size};
  line-height: ${({ theme }) => theme.fonts.profileTitle.size};
  font-weight: ${({ theme }) => theme.fonts.profileTitle.weight};
`;

export const Biography = styled.div`
  p {
    font-size: ${({ theme }) => theme.fonts.description.size};
    line-height: ${({ theme }) => theme.fonts.description.size};
    font-weight: ${({ theme }) => theme.fonts.description.weight};
    color: ${({ theme }) => theme.colors.primaryWhite};
    opacity: 0.75;
  }
`;
