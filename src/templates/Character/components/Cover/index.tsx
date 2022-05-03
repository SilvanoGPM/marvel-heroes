import {
  AgeIcon,
  HeightIcon,
  UniverseIcon,
  WeightIcon,
} from 'components/CustomIcons';
import { getAge } from 'utils/getAge';

import * as S from './styles';

export type CoverProps = {
  birth: string;
  weight: number;
  height: number;
  universe: string;
};

export function Cover({ birth, weight, height, universe }: CoverProps) {
  return (
    <S.Container>
      <S.CoverItem>
        <AgeIcon color="white" />
        {getAge(new Date(birth))} anos
      </S.CoverItem>

      <S.CoverItem>
        <WeightIcon color="white" />
        {weight}kg
      </S.CoverItem>

      <S.CoverItem>
        <HeightIcon color="white" />
        {height}m
      </S.CoverItem>

      <S.CoverItem>
        <UniverseIcon color="white" />
        {universe}
      </S.CoverItem>
    </S.Container>
  );
}
