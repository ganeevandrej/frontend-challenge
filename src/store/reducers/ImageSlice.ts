import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IImage } from './../../models/IImage';

interface IImageState {
    images: IImage[],
    isLoading: boolean,
    isError: string
}

const initialState: IImageState = {
    images: [],
    isLoading: false,
    isError: ""
}

export const ImageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        imagesFetching(state) {
            state.isLoading = true
        },
        imagesFetchingSuccess(state, action: PayloadAction<IImage[]>) {
            state.isLoading = false;
            state.images = action.payload;
            state.isError = '';
        },
        imagesFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.isError = action.payload;
        },
    },
})

export default ImageSlice.reducer;