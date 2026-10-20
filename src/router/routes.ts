import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  home: string;
  details: string;
  miembros: string;
  rickandmorty: string;
}

export const switchRoutes: SwitchRoutes = {
  home: "/",
  details: ":id",
  miembros: "/miembros/",
  rickandmorty: "/rickandmorty/",
};

export const routesBreadcumbs: Record<string, string> = {
  home: "",
  details: "",
  miembros: "Miembros",
  rickandmorty: "Rick and Morty",
};

interface Routes extends Omit<SwitchRoutes, "details"> {
  details: (id: string) => string;
}
export const routes: Routes = {
  ...switchRoutes,
  details: (id: string) => generatePath(switchRoutes.details, { id }),
};
