import * as S from './styles';

type CharacterCardProps = {
  data: { name: string; imagePath: string; alterEgo: string };
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
