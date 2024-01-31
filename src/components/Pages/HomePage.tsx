import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getImages } from "../../store/reducers/ActionCreators";
import { CatBlock } from "../helpers/CatBlock";

export const HomePage: React.FC = () => {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const {cats, isLoading }  = useAppSelector((state) => state.CatState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.addEventListener("scroll", hendlerScroll);

    if(isFetching) {
      dispatch(getImages());
      setIsFetching(false);
    }

    return () => {
      document.removeEventListener("scroll", hendlerScroll);
    };
  }, [isFetching, dispatch]);

  const hendlerScroll = () => {
    const element = document.documentElement;
    if(element.scrollHeight - (element.scrollTop + window.innerHeight) < 70) {
      console.log("vhvjh");
      setIsFetching(true);
    }
  };

  const loading = <div className="loading">... загружаем еще котиков ...</div>;

  return (
    <>
      <div className="block_kats">
        <CatBlock cats={cats} />
      </div>
      { 
        isLoading && loading
      }
    </>
  );
};
