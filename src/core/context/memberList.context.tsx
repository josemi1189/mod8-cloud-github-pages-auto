import React from "react";
import { Member } from "@/core/models/member-vm.model";
import { SearchContext } from "./search.context";

interface MemberContext {
  membersData: Member[];
  setMembersData: React.Dispatch<React.SetStateAction<Member[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  organization: string;
}

export const MembersListContext = React.createContext<MemberContext>({
  isLoading: false,
  setIsLoading: () => {},
  membersData: [],
  setMembersData: () => {},
  organization: "",
});

export const MemberListProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { organizationSearch: organization } = React.useContext(SearchContext);
  const [membersData, setMembersData] = React.useState<Member[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <MembersListContext.Provider
      value={{
        membersData,
        setMembersData,
        isLoading,
        setIsLoading,
        organization,
      }}
    >
      {children}
    </MembersListContext.Provider>
  );
};
