import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICat } from '../../models/ICat';

interface IImageState {
    cats: ICat[],
    favoritesCats: ICat[],
    isLoading: boolean,
    isError: string,
}

const initialState: IImageState = {
    cats: [],
    favoritesCats: [],
    isLoading: false,
    isError: ""
}

export const CatSlice = createSlice({
    name: "cat",
    initialState,
    reducers: {
        imagesFetching(state) {
            state.isLoading = true
        },
        imagesFetchingSuccess(state, action: PayloadAction<ICat[]>) {
            state.isLoading = false;
            state.cats = action.payload;
            state.isError = '';
        },
        imagesFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.isError = action.payload;
        },
        addFavoritesCat(state, action: PayloadAction<string>) {
            const item = state.cats.find((item) => item.id === action.payload)!;
            item.isFavorite = true;
            state.favoritesCats.push(item);
        },
        removeFavoritesCat(state, action: PayloadAction<string>) {
            const itemFromCat = state.cats.find((item) => item.id === action.payload)!;
            if (itemFromCat) {
                itemFromCat.isFavorite = false;
            } else {
                const itemFromFavoriteCat = state.favoritesCats.find(
                    (item) => item.id === action.payload)!;
                itemFromFavoriteCat.isFavorite = false;
            }

            state.favoritesCats = state.favoritesCats.filter(
                (item) => item.id !== action.payload);
        }
    },
})

export default CatSlice.reducer;