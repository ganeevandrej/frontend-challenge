import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICat } from "../../models/ICat";

interface IAppState {
  cats: ICat[];
  favoritesCats: ICat[];
  isLoading: boolean;
  isError: string;
}

const initialState: IAppState = {
  cats: [],
  favoritesCats: [],
  isLoading: false,
  isError: "",
};

export const CatSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    imagesFetching(state) {
      state.isLoading = true;
    },
    imagesFetchingSuccess(state, action: PayloadAction<ICat[]>) {
      state.isLoading = false;
      state.cats = [...state.cats, ...action.payload];
      state.isError = "";
    },
    imagesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isError = action.payload;
    },
    actionsFavoritesCat(state, action: PayloadAction<string>) {
      const item = state.cats.find((item) => item.id === action.payload)!;
      if (item.isFavorite) {
        item.isFavorite = false;
        state.favoritesCats = state.favoritesCats.filter(
          (item) => item.id !== action.payload
        );
      } else {
        item.isFavorite = true;
        state.favoritesCats.push(item);
      }
    },
  },
});

export default CatSlice.reducer;
