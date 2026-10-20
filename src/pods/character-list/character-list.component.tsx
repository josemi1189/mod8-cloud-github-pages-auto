import style from "./character-list.module.scss";
import { DetailIcon } from "@/common/icons";
import { LoadingIcon } from "@/common/icons";
import { Button } from "@mui/material";
import { DetailsCard } from "./components/details-card";
import { Pagination } from "@/common/pagination/pagination";
import { useCharacterList } from "@/hooks/useCharacterList";
import { Search } from "@/common/search/search.component";

export const CharacterList: React.FC = () => {
  const {
    selectedRow,
    handleOpen,
    handleClose,
    charactersList,
    isLoading,
    currentPage,
    setCurrentPage,
    handleFilterChange,
  } = useCharacterList();

  return (
    <>
      {selectedRow && <DetailsCard data={selectedRow} onClose={handleClose} />}
      <h1>Personajes de Rick & Morty</h1>
      <Search handleFilterChange={(value) => handleFilterChange(value)} />
      {isLoading ? (
        <div className={style.info}>
          <LoadingIcon />
        </div>
      ) : charactersList.results.length > 0 &&
        charactersList.results[0].id !== null ? (
        <>
          <div className={style.memberList}>
            <div>
              {`Se han encontrado ${charactersList.info.totalCharacters} resultados.`}
            </div>
            {charactersList.results.map((member) => (
              <div key={member.id} className={style.row}>
                {member.image !== "" && (
                  <img src={member.image} alt={member.name} />
                )}
                <span>{member.name}</span>

                <Button key={member.id} onClick={() => handleOpen(member)}>
                  <DetailIcon color="info" key={member.id} />
                </Button>
              </div>
            ))}
          </div>
          <Pagination
            totalPages={charactersList.info.totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <div className={style.error}>
          <span>No se han obtenido resultados</span>
        </div>
      )}
    </>
  );
};
