import * as am from "@/core/models/member-api.model";
import * as vm from "@/core/models/member-vm.model";

export const mapMemberToVm = (member: am.Member): vm.Member => ({
  id: String(member.id),
  login: member.login,
  avatarUrl: member.avatar_url,
  htmlUrl: member.html_url,
});

export const mapMemberListtoVM = (members: am.Member[]): vm.Member[] => {
  if (members.length > 0) {
    return members.map((member) => mapMemberToVm(member));
  } else {
    return [];
  }
};
