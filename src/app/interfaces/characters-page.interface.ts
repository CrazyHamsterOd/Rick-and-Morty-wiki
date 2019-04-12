import {CharacterInterface} from './character.interface';

export interface CharactersPageInterface {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: CharacterInterface[];
}
