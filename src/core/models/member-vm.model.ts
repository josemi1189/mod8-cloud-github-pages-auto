export interface Member {
  id: string;
  login: string;
  avatarUrl: string;
  htmlUrl: string;
}

export const createEmptyMember = (): Member => ({
  id: "",
  avatarUrl: "",
  htmlUrl: "",
  login: "",
});

export const createEmptyMemberList = (): Member[] => {
  return [createEmptyMember()];
};
