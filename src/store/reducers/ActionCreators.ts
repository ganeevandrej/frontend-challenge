import { AppDispatch } from './../store';
import { IImage } from '../../models/IImage';
import { ImageSlice } from './ImageSlice';
import axios from 'axios';


export const getImages = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(ImageSlice.actions.imagesFetching());
        const response = await axios.get<IImage[]>("https://api.thecatapi.com/v1/images/search?limit=10");
        dispatch(ImageSlice.actions.imagesFetchingSuccess(response.data));
    } catch (e) {
        dispatch(ImageSlice.actions.imagesFetchingError('произошла ошибка'));

    }
}
