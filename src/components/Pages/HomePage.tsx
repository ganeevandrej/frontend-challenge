import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getImages } from "../../store/reducers/ActionCreators";
import { CatBlock } from "../helpers/CatBlock";

export const HomePage: React.FC = () => {
  const [scroll, setScroll] = useState<number>(15);
  const {cats, isLoading }  = useAppSelector((state) => state.CatState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.addEventListener("scroll", hendlerScroll);
    dispatch(getImages(scroll));
    return () => {
      document.removeEventListener("scroll", hendlerScroll);
    };
  }, [scroll, dispatch]);

  const hendlerScroll = () => {
    const element = document.documentElement;
    if(element.scrollHeight - (element.scrollTop + window.innerHeight) < 70) {
      console.log("vhvjh");
      setScroll((state) => state + 5);
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
