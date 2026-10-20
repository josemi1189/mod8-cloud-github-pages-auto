import { Link } from "react-router-dom";
import { switchRoutes } from "@/router";
import { Card } from "@/common/card";
import style from "./home.component.module.scss";

export const Home = () => {
  return (
    <>
      <Link to={switchRoutes.miembros} className={style.link}>
        <Card urlImage="logo_lemoncode.png" title={"LemonCode"} />
      </Link>
      <Link to={switchRoutes.rickandmorty} className={style.link}>
        <Card urlImage="logo_rick-and-morty.png" title={"Rick & Morty"} />
      </Link>
    </>
  );
};
