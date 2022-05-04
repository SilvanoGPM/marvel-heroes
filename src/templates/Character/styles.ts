import styled from 'styled-components';

type BannerProps = {
  image: string;
};

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.primaryBlack};
`;

export const GoBack = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: ${({ theme }) => theme.sizes.small};
`;

export const Banner = styled.div<BannerProps>`
  --gradient: rgba(0, 0, 0, 0.98);
  background-position: center center, left, right, top bottom;
  background-size: 100%, 50%, 100%, cover;
  background-image: linear-gradient(transparent 40%, var(--gradient) 80%),
    linear-gradient(to left, transparent 20%, var(--gradient) 100%),
    linear-gradient(to right, transparent 50%, var(--gradient) 100%),
    ${({ image }) => `url(${image})`};
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  width: 100%;
  max-width: 50rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.sizes.small};
  margin: 0 auto;
`;

export const Content = styled.div`
  margin: 0 auto;
  margin-top: -30rem;
  max-width: 50rem;
`;

export const AlterEgo = styled.p`
  padding-left: ${({ theme }) => theme.sizes.small};
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
  padding-left: ${({ theme }) => theme.sizes.small};
`;

export const Biography = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryBlack};

  p {
    padding: ${({ theme }) => theme.sizes.small};
    font-size: ${({ theme }) => theme.fonts.description.size};
    line-height: ${({ theme }) => theme.fonts.description.size};
    font-weight: ${({ theme }) => theme.fonts.description.weight};
    color: ${({ theme }) => theme.colors.primaryWhite};
    opacity: 0.75;
    max-width: 50rem;
  }
`;

export const SectionTitle = styled.div`
  padding: ${({ theme }) => `${theme.sizes.medium} ${theme.sizes.small}`};
  color: ${({ theme }) => theme.colors.primaryWhite};
  font-size: ${({ theme }) => theme.fonts.sectionTitle.size};
  line-height: ${({ theme }) => theme.fonts.sectionTitle.size};
  font-weight: ${({ theme }) => theme.fonts.sectionTitle.weight};
  background-color: ${({ theme }) => theme.colors.primaryBlack};
`;

export const Abilities = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.medium};
  background-color: ${({ theme }) => theme.colors.primaryBlack};
`;

export const Movies = styled.section`
  background-color: ${({ theme }) => theme.colors.primaryBlack};
`;
