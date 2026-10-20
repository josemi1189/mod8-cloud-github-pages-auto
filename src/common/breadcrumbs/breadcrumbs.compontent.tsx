import { routes, routesBreadcumbs } from "@/router";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon } from "../icons/home.icon";
import style from "./breadcrumbs.component.module.scss";
import React from "react";

export const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter(Boolean);

  const separator = <span className={style.separator}>/</span>;

  return (
    <div className={style.breadcrumbs} aria-label="breadcrumb">
      <div className={style.content}>
        <Link to={routes.home} aria-label="Página principal">
          <HomeIcon />
        </Link>

        {pathnames.map((item, index) => {
          const isLast = index === pathnames.length - 1;

          // Nombre amigable o item de la URL
          const displayName = routesBreadcumbs[item] || item;
          return (
            <React.Fragment key={item}>
              {separator}
              {!isLast ? (
                <Link to={`/${item}`} className={style.item} key={index}>
                  {displayName}
                </Link>
              ) : (
                <span key={index} className={style.item}>
                  {displayName}
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
