import { GetStaticProps } from 'next';

import { HomeTemplate, HomeTemplateProps } from 'templates/Home';
import client from 'graphql/client';
import { GET_HOME_CHARACTERS } from 'graphql/queries';

import {
  CharacterType,
  GetHomeCharactersQuery,
} from 'graphql/generated/graphql';

export default function Home({ characters }: HomeTemplateProps) {
  return <HomeTemplate characters={characters} />;
}

function byCharacterType(type: CharacterType) {
  return ({ character_type }: { character_type: CharacterType }) =>
    character_type === type;
}

export const getStaticProps: GetStaticProps = async () => {
  const { characters } = await client.request<GetHomeCharactersQuery>(
    GET_HOME_CHARACTERS,
  );

  const heroes = characters.filter(byCharacterType(CharacterType.Hero));
  const villains = characters.filter(byCharacterType(CharacterType.Villain));
  const antiHeroes = characters.filter(byCharacterType(CharacterType.Antihero));
  const aliens = characters.filter(byCharacterType(CharacterType.Alien));
  const humans = characters.filter(byCharacterType(CharacterType.Human));

  return {
    props: {
      characters: {
        heroes,
        villains,
        antiHeroes,
        aliens,
        humans,
      },
    },
    revalidate: 60,
  };
};
