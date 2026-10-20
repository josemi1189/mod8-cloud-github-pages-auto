import style from "./header.module.scss";
import React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "@/router";

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.content}>
        <div className={style.logo}>
          <Link to={switchRoutes.home}>
            <img src={`${import.meta.env.BASE_URL}logo.webp`} alt="Logo" />
          </Link>
        </div>
        <div className={style.title}>
          <h2>Módulo 4.1 - Frameworks - React Laboratorio</h2>
        </div>
      </div>
    </header>
  );
};
