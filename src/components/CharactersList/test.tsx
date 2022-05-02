import { CharactersList } from '.';
import { renderComponentWithTheme } from 'utils/renderComponentWithTheme';
import { screen } from '@testing-library/react';

describe('<CharactersList />', () => {
  test('should render title and cards', () => {
    const character = {
      name: 'Homem Aranha',
      alterEgo: 'Peter Parker',
      imagePath: './chars/spider-man.png',
      biography:
        'Em Forest Hills, Queens, Nova York, o estudante de ensino médio, Peter Parker, é um cientista orfão que vive com seu tio Ben e tia May. Ele é mordido por uma aranha radioativa em uma exposição científica e adquire a agilidade e a força proporcional de um aracnídeo. Junto com a super força, Parker ganha a capacidade de andar nas paredes e tetos. Através de sua habilidade nativa para a ciência, ele desenvolve um aparelho que o permitir lançar teias artificiais. Inicialmente buscando capitalizar suas novas habilidades, Parker cria um traje e, como Homem Aranha, torna-se uma estrela de televisão.',
      caracteristics: {
        birth: '1990',
        weight: {
          value: 78,
          unity: 'kg',
        },
        height: {
          value: 1.8,
          unity: 'meters',
        },
        universe: 'Terra 616',
      },
      abilities: {
        force: 70,
        intelligence: 65,
        agility: 90,
        endurance: 60,
        velocity: 80,
      },
      movies: [
        './movies/captain-america-3.jpg',
        './movies/spider-man-homecoming.jpg',
        './movies/avengers-3.jpg',
        './movies/avengers-4.jpg',
        './movies/spider-man-far-from-home.jpg',
      ],
    };

    renderComponentWithTheme(
      <CharactersList title="Heroes" characters={[character]} />,
    );

    expect(screen.getByText(/heroes/i)).toBeInTheDocument();
    expect(screen.getByText(/ver tudo/i)).toBeInTheDocument();
    expect(screen.getByText(/peter parker/i)).toBeInTheDocument();
    expect(screen.getByText(/homem aranha/i)).toBeInTheDocument();
  });
});
