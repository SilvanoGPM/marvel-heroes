import { screen } from '@testing-library/react';
import { renderComponentWithTheme } from 'utils/renderComponentWithTheme';
import { Cover } from '.';

describe('<Cover />', () => {
  test('should render data and icons', () => {
    const { container } = renderComponentWithTheme(
      <Cover
        birth="2004-09-04"
        height={1.7}
        weight={52}
        universe="Terra 616"
      />,
    );

    const hasFourIcons = container.querySelectorAll('svg').length === 4;

    expect(hasFourIcons).toBeTruthy();

    expect(screen.getByText(/\d\d anos/i)).toBeInTheDocument();
    expect(screen.getByText(/1.7m/i)).toBeInTheDocument();
    expect(screen.getByText(/52kg/i)).toBeInTheDocument();
    expect(screen.getByText(/terra 616/i)).toBeInTheDocument();
  });
});
