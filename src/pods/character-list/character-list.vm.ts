interface Location {
  name: string;
  url: string;
}
export interface Info {
  totalCharacters: number;
  nextPage: string | null;
  totalPages: number;
  prevPage: string | null;
}
export interface CharacterData {
  info: Info;
  results: Results[];
}

export interface Results {
  id: number | null;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: Location;
  image: string;
  episode: string[];
}

export const createEmptyCharacterData = (): CharacterData => {
  return {
    info: {
      totalCharacters: 0,
      nextPage: null,
      totalPages: 0,
      prevPage: null,
    },
    results: [createEmptyResults()],
  };
};
export const createEmptyResults = (): Results => {
  return {
    id: null,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    location: {
      name: "",
      url: "",
    },
    image: "",
    episode: [],
  };
};
