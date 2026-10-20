import style from "./member-list.module.scss";
import { DetailIcon } from "@/common/icons";
import { Link } from "react-router-dom";
import { routes } from "@/router";
import { MembersListContext } from "@/core/context";
import { Search } from "@/common/search/search.component";
import React from "react";
import { SearchContext } from "@/core/context/search.context";
import { useGetMembers } from "./api";
import { Pagination } from "@/common/pagination";

export const MemberListComponent: React.FC = () => {
  const { membersData, isLoading } = React.useContext(MembersListContext);
  const { organizationSearch } = React.useContext(SearchContext);
  const [search, setSearch] = React.useState(organizationSearch);
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  useGetMembers(search);

  const membersPerPage = 5;
  const totalPages = Math.ceil(membersData.length / membersPerPage);

  const paginatedMembers = React.useMemo(() => {
    const start = (currentPage - 1) * membersPerPage;
    const end = start + membersPerPage;
    return membersData.slice(start, end);
  }, [currentPage, membersData]);

  return (
    <>
      <h1>
        Miembros de{" "}
        <span className={style.capitalize}>{organizationSearch}</span>
      </h1>
      <Search
        handleFilterChange={(newValue) => {
          setSearch(newValue);
        }}
        defaultValue={organizationSearch}
      />
      {isLoading ? (
        <div className={style.error}>
          <span>Cargando</span>
        </div>
      ) : paginatedMembers.length > 0 ? (
        <div className={style.memberList}>
          <div>Se han encontrado {membersData.length} resultados.</div>
          {paginatedMembers.map((member) => (
            <div key={member.id} className={style.rowData}>
              <span>
                <img src={member.avatarUrl} alt={member.login} />
              </span>
              <span>{member.id}</span>
              <span>{member.login}</span>
              <span>
                <Link to={routes.details(member.login)}>
                  <DetailIcon color="info" />
                </Link>
              </span>
            </div>
          ))}
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      ) : (
        <div className={style.error}>
          <span>No se han obtenido resultados</span>
        </div>
      )}
    </>
  );
};
