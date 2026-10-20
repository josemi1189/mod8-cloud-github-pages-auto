interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}
interface Info {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}
export interface CharacterDataApi {
  info: Info;
  results: Results[];
}

export interface Results {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export const createEmptyResultsApi = (): CharacterDataApi => {
  return {
    info: {
      count: 0,
      next: null,
      pages: 0,
      prev: null,
    },
    results: [
      {
        id: 0,
        name: "",
        status: "",
        species: "",
        type: "",
        gender: "",
        origin: { name: "", url: "" },
        location: {
          name: "",
          url: "",
        },
        image: "",
        episode: [""],
        url: "",
        created: "",
      },
    ],
  };
};
