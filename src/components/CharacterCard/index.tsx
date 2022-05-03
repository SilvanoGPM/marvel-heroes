import * as S from './styles';

type CharacterCardProps = {
  data: {
    name: string;
    image: string;
    alterEgo: string;
  };
};

export function CharacterCard({ data }: CharacterCardProps) {
  return (
    <S.Card
      image={data.image}
      role="img"
      aria-label={`Personagem da Marvel ${data.name}`}
    >
      <S.AlterEgo>{data.alterEgo}</S.AlterEgo>
      <S.Name>{data.name}</S.Name>
    </S.Card>
  );
}
