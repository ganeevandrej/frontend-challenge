import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CatState from "./reducers/CatSlice";

const rootReducer = combineReducers({
    CatState
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];