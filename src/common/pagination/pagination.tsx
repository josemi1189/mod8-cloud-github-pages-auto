import React, { useMemo } from "react";
import style from "./pagination.module.scss";
import { AfterIcon, BeforeIcon } from "../icons";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
export const Pagination: React.FC<PaginationProps> = (props) => {
  const { currentPage, setCurrentPage, totalPages } = props;

  const LIMIT = 5;
  const SIBLINGS = Math.floor((LIMIT - 2) / 2);

  const handleActualPage = (page: number): void => {
    setCurrentPage(page);
  };

  const allPages: number[] = useMemo(() => {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }, [totalPages]);

  const visiblePages: number[] = useMemo(() => {
    if (totalPages <= LIMIT) {
      return allPages;
    }
    const pages: number[] = [];

    let start = Math.max(2, currentPage - SIBLINGS);
    let end = Math.min(totalPages - 1, currentPage + SIBLINGS);

    // Ajustar ventana si estamos cerca de los extremos
    if (currentPage - SIBLINGS <= 1) {
      end = Math.min(totalPages - 1, start + (LIMIT - 3));
    }
    if (currentPage + SIBLINGS >= totalPages) {
      start = Math.max(2, totalPages - (LIMIT - 2));
    }
    // Incluye números de página
    pages.push(1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    pages.push(totalPages);
    return pages;
  }, [totalPages, currentPage, allPages, LIMIT, SIBLINGS]);

  return (
    <div className={style.pagination}>
      <button
        disabled={currentPage === 1}
        onClick={() => handleActualPage(currentPage - 1)}
        className={style.arrow}
      >
        <BeforeIcon />
      </button>

      <div className={style.buttonsPage}>
        {Array.isArray(visiblePages) &&
          visiblePages.map((page, index) => (
            <React.Fragment key={index}>
              {visiblePages[index - 1] + 1 !== page && page !== 1 ? (
                <button className={style.emptyButton}>...</button>
              ) : null}
              <button
                key={page}
                onClick={() => handleActualPage(page)}
                className={currentPage === page ? style.active : style.button}
              >
                {page}
              </button>
            </React.Fragment>
          ))}
      </div>

      <button
        disabled={currentPage === totalPages}
        onClick={() => handleActualPage(currentPage + 1)}
        className={style.arrow}
      >
        <AfterIcon />
      </button>
    </div>
  );
};
