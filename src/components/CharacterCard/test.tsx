import { screen } from '@testing-library/react';
import { renderComponentWithTheme } from 'utils/renderComponentWithTheme';

import { CharacterCard } from '.';

describe('<CharacterCard />', () => {
  test('should render a card with character name and alterEgo', () => {
    const data = {
      name: 'Homem Aranha',
      alterEgo: 'Peter Parker',
      imagePath: '',
    };

    renderComponentWithTheme(<CharacterCard data={data} />);

    expect(screen.getByText(/peter parker/i)).toBeInTheDocument();
    expect(screen.getByText(/homem aranha/i)).toBeInTheDocument();
  });
});
