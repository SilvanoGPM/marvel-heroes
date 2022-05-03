import { Character } from 'global/types';

export type CharacterTemplateProps = {
  character: Character;
};

export function CharacterTemplate({ character }: CharacterTemplateProps) {
  return <h1>{character.name}</h1>;
}
