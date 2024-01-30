import { AppDispatch } from './../store';
import { ICat } from '../../models/ICat';
import { CatSlice } from './CatSlice';
import axios from 'axios';
import { transformCat } from '../../components/helpers/trnsformCat';


export const getImages = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(CatSlice.actions.imagesFetching());
        const response = await axios.get<ICat[]>("https://api.thecatapi.com/v1/images/search?limit=10");

        dispatch(CatSlice.actions.imagesFetchingSuccess(response.data.map(transformCat)));
    } catch (e) {
        dispatch(CatSlice.actions.imagesFetchingError('произошла ошибка'));

    }
}
