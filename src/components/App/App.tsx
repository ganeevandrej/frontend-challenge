import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { FavoritesPage } from "../Pages/FavoritesPage";
import { LinkApp } from "../helpers/LinkApp";
import "../../styles/index.scss";

export const App: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className=" wrapper">
          <nav className="nav">
            <LinkApp href={"/"} name={"Все котики"} />
            <LinkApp href={"/favorites"} name={"Любимые котики"} />
          </nav>
        </div>
      </header>
      <main>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </main>
    </>
  );
};
