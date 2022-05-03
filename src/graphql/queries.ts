import { gql } from 'graphql-request';

export const GET_ALL_CHARACTERS = gql`
  query getAllCharacters($first: Int) {
    characters(first: $first) {
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
