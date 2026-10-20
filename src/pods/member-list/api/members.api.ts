import { Member } from "@/core/models/member-api.model";

export const getMembersApi = async (
  organization: string,
): Promise<Member[]> => {
  const response = await fetch(
    `https://api.github.com/orgs/${organization}/members`,
  );

  if (!response.ok) {
    return [];
  } else {
    return response.json();
  }
};
