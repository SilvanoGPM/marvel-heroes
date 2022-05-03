import { useRouter } from 'next/router';

import { BackIcon } from 'components/CustomIcons';
import { Character } from 'global/types';

import { Cover } from './components/Cover';

import * as S from './styles';
import { MoviesList } from './components/MoviesList';

export type CharacterTemplateProps = {
  character: Character;
};

export function CharacterTemplate({ character }: CharacterTemplateProps) {
  const router = useRouter();

  const image = character.image[0].url;

  return (
    <S.Container>
      <S.GoBack onClick={router.back}>
        <BackIcon color="white" size={24} />
      </S.GoBack>

      <S.Banner image={image}>
        <S.Spacer />

        <S.AlterEgo>{character.alterEgo}</S.AlterEgo>
        <S.Title>{character.name}</S.Title>

        <Cover {...character} />

        <S.Biography
          dangerouslySetInnerHTML={{ __html: character.biography.html }}
        />
      </S.Banner>

      <MoviesList movies={character.movie} />
    </S.Container>
  );
}
