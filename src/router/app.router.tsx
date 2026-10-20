import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { switchRoutes } from "./routes";
import {
  HomeScene,
  MembersScene,
  MemberDetailScene,
  CharacterListScene,
} from "@/scenes";
import { MemberListProvider, SearchProvider } from "@/core/context";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path={switchRoutes.home} element={<HomeScene />} />
        <Route path={`${switchRoutes.miembros}*`} element={<MembersRouter />} />
        <Route
          path={`${switchRoutes.rickandmorty}*`}
          element={<CharacterListScene />}
        />
        <Route path="/*" element={<Navigate to={switchRoutes.home} />} />
      </Routes>
    </BrowserRouter>
  );
};

export const MembersRouter: React.FC = () => {
  return (
    <SearchProvider>
      <MemberListProvider>
        <Routes>
          <Route path="" element={<MembersScene />} />
          <Route path={switchRoutes.details} element={<MemberDetailScene />} />
          <Route path="/*" element={<Navigate to={switchRoutes.home} />} />
        </Routes>
      </MemberListProvider>
    </SearchProvider>
  );
};
