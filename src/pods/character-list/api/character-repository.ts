import { CharacterDataApi, createEmptyResultsApi } from "./character.model";

export const getCharacterList = async (
  filter: string,
  page?: number,
): Promise<CharacterDataApi> => {
  let baseUrl: string = `https://rickandmortyapi.com/api/character`;

  const params = new URLSearchParams();
  if (page && page > 0) {
    params.append("page", page.toString());
  }
  if (filter && filter !== "") {
    params.append("name", filter);
  }

  const urlSearch: string = params.toString()
    ? `${baseUrl}?${params}`
    : baseUrl;

  const result = await fetch(urlSearch);
  if (result) {
    return result.json();
  }
  return createEmptyResultsApi();
};
