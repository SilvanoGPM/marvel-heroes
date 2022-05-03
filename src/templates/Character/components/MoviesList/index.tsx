import { useRef } from 'react';
import useDraggableScroll from 'use-draggable-scroll';

import * as S from './styles';

type MoviesListProps = { movies: Array<{ images: Array<{ url: string }> }> };

export function MoviesList({ movies }: MoviesListProps) {
  const listRef = useRef<HTMLUListElement | null>(null);

  const { onMouseDown } = useDraggableScroll(listRef);

  return (
    <S.Container>
      <S.List ref={listRef} onMouseDown={onMouseDown}>
        {movies.map(({ images: [{ url }] }) => (
          <S.MovieItem key={url} src={url} />
        ))}
      </S.List>
    </S.Container>
  );
}
