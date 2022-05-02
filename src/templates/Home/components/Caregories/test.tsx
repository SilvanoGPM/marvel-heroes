import { screen } from '@testing-library/react';
import { renderComponentWithTheme } from 'utils/renderComponentWithTheme';

import { Categories } from '.';

describe('<Categories />', () => {
  test('should render categories list with icons', () => {
    const { container } = renderComponentWithTheme(<Categories />);

    const hasFiveCategories = container.querySelectorAll('svg').length === 5;

    expect(hasFiveCategories).toBeTruthy();

    expect(screen.getByTitle('Heróis')).toBeInTheDocument();
    expect(screen.getByTitle('Vilões')).toBeInTheDocument();
    expect(screen.getByTitle('Anti-heróis')).toBeInTheDocument();
    expect(screen.getByTitle('Aliens')).toBeInTheDocument();
    expect(screen.getByTitle('Humanos')).toBeInTheDocument();
  });
});
