import { ICat } from "../../models/ICat";

type Catfetching = {
  url: string;
  id: string;
};

export const transformCat = ({ url, id }: Catfetching): ICat => {
  return {
    url,
    id,
    isFavorite: false,
  };
};
