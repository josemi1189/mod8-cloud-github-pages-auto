import style from "./member-detail.module.scss";
import { switchRoutes } from "@/router";
import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MembersListContext } from "@/core/context/memberList.context";
import { createEmptyMember, Member } from "@/core/models/member-vm.model";
import { AccountBox, GitHub } from "@mui/icons-material";

export const MemberDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [member, setMember] = useState<Member>(createEmptyMember());
  const { membersData } = useContext(MembersListContext);

  useEffect(() => {
    if (membersData.length === 0) {
      navigate(switchRoutes.home);
    }
    const data = membersData.find((member) => member.login === id);
    if (data) setMember(data);
  }, [membersData, id]);

  if (!id) return null;

  return (
    <div className={style.details}>
      <div className={style.content}>
        <div className={style.id}>
          <span>{member.id}</span>
        </div>
        <div className={style.member}>
          <div className={style.image}>
            {member.avatarUrl && (
              <img src={member.avatarUrl} alt={`Imagen de ${member.login}`} />
            )}
          </div>
          <div className={style.rowData}>
            <div>
              <label>
                <AccountBox />
              </label>
              <span>{member.login}</span>
            </div>
            <div>
              <label>
                <GitHub />
              </label>
              <span>{member.htmlUrl}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
