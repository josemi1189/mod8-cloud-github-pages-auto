import { useState, useEffect } from "react";
import { getCharacterList } from "@/pods/character-list/api";
import { mapCharacterListToVM } from "@/pods/character-list/character.mapper";
import {
  CharacterData,
  Results,
  createEmptyCharacterData,
} from "@/pods/character-list/character-list.vm";

export const useCharacterList = () => {
  const [charactersList, setCharacterList] = useState<CharacterData>(
    createEmptyCharacterData,
  );

  const [selectedRow, setSelectedRow] = useState<Results | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filter, setFilter] = useState<string>("");

  const handleOpen = (member: Results): void => {
    setSelectedRow(member);
  };
  const handleClose = (): void => {
    setSelectedRow(null);
  };
  const handleFilterChange = (newFilter: string) => {
    if (filter !== newFilter) {
      setCurrentPage(1);
      setFilter(newFilter);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getCharacterList(filter, currentPage)
      .then(mapCharacterListToVM)
      .then((data) => setCharacterList(data))
      .finally(() => setIsLoading(false));
  }, [filter, currentPage]);

  return {
    selectedRow,
    handleOpen,
    handleClose,
    charactersList,
    isLoading,
    currentPage,
    setCurrentPage,
    setFilter,
    handleFilterChange,
  };
};
