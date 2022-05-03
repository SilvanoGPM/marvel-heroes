import * as S from './styles';

export type StrenghBarProps = {
  name: string;
  total: number;
};

export function StrenghBar({ name, total }: StrenghBarProps) {
  const bar = Array(50).fill(0);

  return (
    <S.Container>
      <S.Name>{name}</S.Name>
      <S.Bar>
        {bar.map((_, pointValue) => {
          const halfTotal = Math.ceil(total / 2);
          const showClassName = pointValue <= halfTotal ? 'show' : '';
          const totalClassName = pointValue === halfTotal ? 'total' : '';

          return (
            <S.Point
              key={pointValue}
              className={`${showClassName} ${totalClassName}`}
            />
          );
        })}
      </S.Bar>
    </S.Container>
  );
}
