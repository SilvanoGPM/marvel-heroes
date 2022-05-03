import { useRef } from 'react';
import useDraggableScroll from 'use-draggable-scroll';

import { CharacterCard } from 'components/CharacterCard';
import { Character } from 'global/types';

import * as S from './styles';

type CharactersListProps = {
  title: string;
  characters: Character[];
};

export function CharactersList({ title, characters }: CharactersListProps) {
  const listRef = useRef<HTMLLIElement | null>(null);

  const { onMouseDown } = useDraggableScroll(listRef);

  return (
    <S.Container>
      <S.Header>
        <S.Heading>{title}</S.Heading>
        <S.ViewAll>Ver tudo</S.ViewAll>
      </S.Header>

      <S.List ref={listRef} onMouseDown={onMouseDown}>
        {characters.map(({ name, alterEgo, image }) => (
          <CharacterCard
            key={name}
            data={{ name, alterEgo, image: image?.[0].url }}
          />
        ))}
      </S.List>
    </S.Container>
  );
}
