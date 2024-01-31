import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { CatSlice } from "../../store/reducers/CatSlice";
import { CatBlock } from "../helpers/CatBlock";
import { getId } from "../helpers/getId";

export const FavoritesPage: React.FC = () => {
  const cats = useAppSelector((state) => state.CatState.favoritesCats);
  const dispatch = useAppDispatch();
  const { actionsFavoritesCat } = CatSlice.actions;

  const handleClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    const target = event.target;
    if (target instanceof HTMLElement) {
      const id = getId(target);
      id && dispatch(actionsFavoritesCat(id));
    }
  };

  return (
    <div onClick={(e) => handleClick(e)} className="block_favorite_kats">
      {cats &&
        cats.map((item) => {
          return <CatBlock key={item.id} cat={item} />;
        })}
    </div>
  );
};
