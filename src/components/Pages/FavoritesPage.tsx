import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { CatBlock } from "../helpers/CatBlock";

export const FavoritesPage: React.FC = () => {
  const cats = useAppSelector((state) => state.CatState.favoritesCats);

  return (
    <div className="block_favorite_kats">
      <CatBlock cats={cats} />
    </div>
  );
};
