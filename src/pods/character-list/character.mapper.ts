import * as api from "./api/character.model";
import {
  Results,
  CharacterData,
  Info,
  createEmptyCharacterData,
} from "./character-list.vm";

const mapCharacterResultToVM = (character: api.Results): Results => ({
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  location: { name: character.location.name, url: character.location.url },
  image: character.image,
  episode: character.episode.map((url) => {
    return url;
  }),
});

export const mapCharacterListToVM = (
  characters: api.CharacterDataApi,
): CharacterData => {
  if (characters.results) {
    const results: Results[] = characters.results.map((character) =>
      mapCharacterResultToVM(character),
    );
    const info: Info = {
      totalCharacters: characters.info.count,
      nextPage: characters.info.next,
      totalPages: characters.info.pages,
      prevPage: characters.info.prev,
    };
    return { results, info };
  } else {
    return createEmptyCharacterData();
  }
};
