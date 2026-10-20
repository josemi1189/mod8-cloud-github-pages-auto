import React from "react";
import { getMembersApi, mapMemberListtoVM } from "./index";
import { MembersListContext, SearchContext } from "@/core/context";

export const useGetMembers = (organization: string) => {
  const { setMembersData, setIsLoading } = React.useContext(MembersListContext);
  const { setOrganizationSearch } = React.useContext(SearchContext);
  /*
  const dataMocked = [
    {
      login: "antonio06",
      id: 14540103,
      node_id: "MDQ6VXNlcjE0NTQwMTAz",
      avatar_url: "https://avatars.githubusercontent.com/u/14540103?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/antonio06",
      html_url: "https://github.com/antonio06",
      followers_url: "https://api.github.com/users/antonio06/followers",
      following_url:
        "https://api.github.com/users/antonio06/following{/other_user}",
      gists_url: "https://api.github.com/users/antonio06/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/antonio06/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/antonio06/subscriptions",
      organizations_url: "https://api.github.com/users/antonio06/orgs",
      repos_url: "https://api.github.com/users/antonio06/repos",
      events_url: "https://api.github.com/users/antonio06/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/antonio06/received_events",
      type: "User",
      user_view_type: "public",
      site_admin: false,
    },
    {
      login: "brauliodiez",
      id: 1457912,
      node_id: "MDQ6VXNlcjE0NTc5MTI=",
      avatar_url: "https://avatars.githubusercontent.com/u/1457912?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/brauliodiez",
      html_url: "https://github.com/brauliodiez",
      followers_url: "https://api.github.com/users/brauliodiez/followers",
      following_url:
        "https://api.github.com/users/brauliodiez/following{/other_user}",
      gists_url: "https://api.github.com/users/brauliodiez/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/brauliodiez/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/brauliodiez/subscriptions",
      organizations_url: "https://api.github.com/users/brauliodiez/orgs",
      repos_url: "https://api.github.com/users/brauliodiez/repos",
      events_url: "https://api.github.com/users/brauliodiez/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/brauliodiez/received_events",
      type: "User",
      user_view_type: "public",
      site_admin: false,
    },
  ];*/

  React.useEffect(() => {
    if (!organization) return;

    const fetchMembers = async () => {
      setIsLoading(true);

      try {
        //const dataMapped = mapMemberListtoVM(dataMocked);
        // setMembersData(dataMapped);
        await getMembersApi(organization)
          .then(mapMemberListtoVM)
          .then(setMembersData);
      } catch (error) {
        console.log("Error: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    setOrganizationSearch(organization);
    fetchMembers();
  }, [organization]);
};
