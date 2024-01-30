import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getImages } from "../../store/reducers/ActionCreators";
import { CatBlock } from "../helpers/CatBlock";

export const HomePage: React.FC = () => {
  const cats = useAppSelector((state) => state.CatState.cats);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getImages());
  }, []);
  return (
    <div className="block_kats">
      <CatBlock cats={cats} />
    </div>
  );
};
