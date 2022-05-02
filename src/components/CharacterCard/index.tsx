import { Character } from 'data/characters';

import * as S from './styles';

type CharacterCardProps = {
  data: Character;
};

export function CharacterCard({ data }: CharacterCardProps) {
  return (
    <S.Card
      image={data.imagePath}
      role="img"
      aria-label={`Personagem da Marvel ${data.name}`}
    >
      <S.AlterEgo>{data.alterEgo}</S.AlterEgo>
      <S.Name>{data.name}</S.Name>
    </S.Card>
  );
}
