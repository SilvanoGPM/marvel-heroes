import { useRef } from 'react';
import useDraggableScroll from 'use-draggable-scroll';

import { CharacterCard } from 'components/CharacterCard';
import { Character } from 'data/characters';

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
        {characters.map((data) => (
          <CharacterCard key={data.name} data={data} />
        ))}
      </S.List>
    </S.Container>
  );
}
