import { CharactersList } from '.';
import { renderComponentWithTheme } from 'utils/renderComponentWithTheme';
import { screen } from '@testing-library/react';
import { Character } from 'global/types';

describe('<CharactersList />', () => {
  test('should render title and list cards', () => {
    const character = {
      name: 'Homem Aranha',
      alterEgo: 'Peter Parker',
    } as Character;

    const { container } = renderComponentWithTheme(
      <CharactersList title="Heroes" characters={[character]} />,
    );

    expect(container.querySelector('ul')).toBeInTheDocument();

    expect(screen.getByText(/heroes/i)).toBeInTheDocument();
    expect(screen.getByText(/ver tudo/i)).toBeInTheDocument();
    expect(screen.getByText(/peter parker/i)).toBeInTheDocument();
    expect(screen.getByText(/homem aranha/i)).toBeInTheDocument();
  });
});
