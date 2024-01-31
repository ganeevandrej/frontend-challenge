import React, { SyntheticEvent, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { CatSlice } from "../../store/reducers/CatSlice";
import { ICatBlock } from "../../models/props/ICatBlock";
import { Iconfavorite } from "./IconFavorite";
import vector3 from "../../resourse/Vector_3.png";

export const CatBlock: React.FC<ICatBlock> = ({ cats }) => {
  const [isMouse, setIsMause] = useState<boolean>(false);
  const { addFavoritesCat, removeFavoritesCat } = CatSlice.actions;
  const dispatch = useAppDispatch();

  const handleMouse = (event: SyntheticEvent<EventTarget>, isFavorite: boolean, id: string) => {
    if (event.type === "mousedown") {
      setIsMause(true);
      isFavorite ? dispatch(removeFavoritesCat(id)) : dispatch(addFavoritesCat(id));
    } else {
      setIsMause(false);
    }
  };

  const IconMouse = <img className="heart_img" src={vector3} alt="heart" />

  return (
    <>
      {cats &&
        cats.map(({ id, url, isFavorite }, index) => {
          return (
            <div key={id+index} className="kat">
              <div className="block__inner">
                <img className="cat_img" src={url} alt={id} />
                <div 
                onMouseDown={(event) => handleMouse(event, isFavorite, id)} 
                onMouseUp={(event) => handleMouse(event, isFavorite, id)}>
                  {
                    isMouse ? IconMouse : <Iconfavorite isFavorite={isFavorite} id={id} />
                  }
                  
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
