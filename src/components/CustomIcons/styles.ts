import styled from 'styled-components';

export type IconWrapperProps = {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
};

export type GradientIconProps = {
  start: string;
  end: string;
} & IconWrapperProps;

export const IconWrapper = styled.div<IconWrapperProps>`
  svg {
    width: ${({ width = 16 }) => `${width}px`};
    height: ${({ height = 16 }) => `${height}px`};
    color: ${({ fill, stroke, theme }) =>
      fill || stroke || theme.colors.primaryDark};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  path {
    fill: ${({ fill, theme }) => fill || theme.colors.primaryDark};
    stroke: ${({ stroke, theme }) => stroke || theme.colors.primaryDark};
  }
`;

export const GradientIcon = styled.div<GradientIconProps>`
  .main-stop {
    stop-color: ${({ start, theme }) => start || theme.colors.primaryDark};
  }

  .alt-stop {
    stop-color: ${({ end, theme }) => end || theme.colors.primaryDark};
  }

  svg {
    width: ${({ width = 16 }) => `${width}px`};
    height: ${({ height = 16 }) => `${height}px`};
  }
`;
