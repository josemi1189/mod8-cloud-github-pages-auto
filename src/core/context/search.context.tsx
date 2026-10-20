import React, { useState } from "react";
import { DEFAULT_ORG } from "../constants/constants";

interface SearchContext {
  organizationSearch: string;
  setOrganizationSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = React.createContext<SearchContext>({
  organizationSearch: "",
  setOrganizationSearch: () => {},
});

export const SearchProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [organization, setOrganization] = useState<string>("");
  if (organization === "") {
    setOrganization(DEFAULT_ORG);
  }

  return (
    <SearchContext.Provider
      value={{
        organizationSearch: organization,
        setOrganizationSearch: setOrganization,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
