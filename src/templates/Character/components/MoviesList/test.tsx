import { MoviesList } from '.';
import { renderComponentWithTheme } from 'utils/renderComponentWithTheme';

describe('<MoviesListi />', () => {
  test('should render list of images', () => {
    const movie: { images: Array<{ url: string }> } = {
      images: [{ url: '' }],
    };

    const { container } = renderComponentWithTheme(
      <MoviesList movies={[movie]} />,
    );

    expect(container.querySelector('ul')).toBeInTheDocument();
  });
});
