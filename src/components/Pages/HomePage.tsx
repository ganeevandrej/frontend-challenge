import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getImages } from "../../store/reducers/ActionCreators";
import { CatSlice } from "../../store/reducers/CatSlice";
import { CatBlock } from "../helpers/CatBlock";
import { getId } from "../helpers/getId";

export const HomePage: React.FC = () => {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const { cats, isLoading } = useAppSelector((state) => state.CatState);
  const dispatch = useAppDispatch();

  const { actionsFavoritesCat } = CatSlice.actions;

  useEffect(() => {
    document.addEventListener("scroll", hendlerScroll);

    if (isFetching) {
      dispatch(getImages());
      setIsFetching(false);
    }

    return () => {
      document.removeEventListener("scroll", hendlerScroll);
    };
  }, [isFetching, dispatch]);

  const hendlerScroll = () => {
    const element = document.documentElement;
    if (element.scrollHeight - (element.scrollTop + window.innerHeight) < 70) {
      setIsFetching(true);
    }
  };

  const handleClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    const target = event.target;
    if (target instanceof HTMLElement) {
      const id = getId(target);
      id && dispatch(actionsFavoritesCat(id));
    }
  };

  const loadingBlock = (
    <div className="loading">... загружаем еще котиков ...</div>
  );

  return (
    <>
      <div onClick={handleClick} className="block_kats">
        {cats &&
          cats.map((item) => {
            return <CatBlock key={item.id} cat={item} />;
          })}
      </div>
      {isLoading && loadingBlock}
    </>
  );
};
