import { MoviesList } from '.';
import { renderComponentWithTheme } from 'utils/renderComponentWithTheme';

describe('<MoviesListi />', () => {
  test('should render title and list cards', () => {
    const movie: { images: Array<{ url: string }> } = {
      images: [{ url: '' }],
    };

    const { container } = renderComponentWithTheme(
      <MoviesList movies={[movie]} />,
    );

    expect(container.querySelector('ul')).toBeInTheDocument();
  });
});
