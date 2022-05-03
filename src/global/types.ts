import { CharacterType } from 'graphql/generated/graphql';

export type Character = {
  name: string;
  alterEgo: string;
  birth: Date;
  weight: number;
  height: number;
  universe: string;
  abilities: {
    force: number;
    agility: number;
    velocity: number;
    endurance: number;
    intelligence: number;
  };
  character_type: CharacterType;
  biography: { html: string; text: string };
  image: Array<{ url: string; width: number; height: number }>;
  movie: Array<{ images: Array<{ url: string }> }>;
};
