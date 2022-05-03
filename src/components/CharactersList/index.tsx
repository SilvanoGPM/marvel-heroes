import { useRef } from 'react';
import useDraggableScroll from 'use-draggable-scroll';

import { CharacterCard } from 'components/CharacterCard';
import { HomeCharacter } from 'templates/Home';

import * as S from './styles';

type CharactersListProps = {
  title: string;
  characters: HomeCharacter[];
};

export function CharactersList({ title, characters }: CharactersListProps) {
  const listRef = useRef<HTMLUListElement | null>(null);

  const { onMouseDown } = useDraggableScroll(listRef);

  return (
    <S.Container>
      <S.Header>
        <S.Heading>{title}</S.Heading>
        <S.ViewAll>Ver tudo</S.ViewAll>
      </S.Header>

      <S.List ref={listRef} onMouseDown={onMouseDown}>
        {characters.map(({ image, ...props }) => (
          <CharacterCard
            key={props.name}
            data={{ ...props, image: image?.[0].url }}
          />
        ))}
      </S.List>
    </S.Container>
  );
}
