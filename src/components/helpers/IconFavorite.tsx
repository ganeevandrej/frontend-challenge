import { IIconFavorite } from "../../models/props/IIconFavorite";
import vector from "../../resourse/Vector.png";
import vector2 from "../../resourse/Vector_2.png";

export const Iconfavorite: React.FC<IIconFavorite> = ({ isFavorite, id }) => {
  return (
    <img
      className="heart_img"
      src={isFavorite ? vector2 : vector}
      alt="heart"
    />
  );
};
