import React from "react";
import { ReactComponent as Icon } from "../../resourse/favorite.svg";
import { ICatBlock } from "../../models/props/ICatBlock";

export const CatBlock: React.FC<ICatBlock> = ({ cat }) => {
  const { id, url, isFavorite } = cat;
  return (
    <div className="kat">
      <div className="block__inner">
        <img className="cat_img" src={url} alt={id} />
        <Icon
          data-id={id}
          className={isFavorite ? "icon-active icon" : "icon"}
        />
      </div>
    </div>
  );
};
