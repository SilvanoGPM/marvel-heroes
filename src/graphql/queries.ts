import { gql } from 'graphql-request';

export const GET_ALL_CHARACTERS = gql`
  query getAllCharacters($first: Int) {
    characters(first: $first) {
      slug
      name
      alterEgo
      birth
      weight
      height
      universe
      abilities
      character_type
      biography {
        html
        text
      }
      image {
        url
        width
        height
      }
      movie {
        ... on Movie {
          images {
            url
          }
        }
      }
    }
  }
`;

export const GET_HOME_CHARACTERS = gql`
  query getHomeCharacters {
    characters {
      name
      slug
      alterEgo
      character_type
      image {
        url
        width
      }
    }
  }
`;

export const GET_CHARACTER_BY_SLUG = gql`
  query getCharacterBySlug($slug: String!) {
    character(where: { slug: $slug }) {
      name
      alterEgo
      birth
      weight
      height
      universe
      abilities
      character_type
      biography {
        html
        text
      }
      image {
        url
        width
        height
      }
      movie {
        ... on Movie {
          images {
            url
          }
        }
      }
    }
  }
`;
