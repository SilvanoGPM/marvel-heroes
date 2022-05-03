import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import client from 'graphql/client';
import { GET_ALL_CHARACTERS, GET_CHARACTER_BY_SLUG } from 'graphql/queries';
import { CharacterTemplate, CharacterTemplateProps } from 'templates/Character';

import {
  GetAllCharactersQuery,
  GetCharacterBySlugQuery,
} from 'graphql/generated/graphql';

export default function CharacterComponent({
  character,
}: CharacterTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <CharacterTemplate character={character} />;
}

export async function getStaticPaths() {
  const { characters } = await client.request<GetAllCharactersQuery>(
    GET_ALL_CHARACTERS,
    {
      first: 5,
    },
  );

  const paths = characters.map(({ slug }) => ({ params: { slug } }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { character } = await client.request<GetCharacterBySlugQuery>(
    GET_CHARACTER_BY_SLUG,
    {
      slug: params?.slug,
    },
  );

  if (!character) {
    return { notFound: true };
  }

  return { props: { character } };
};
