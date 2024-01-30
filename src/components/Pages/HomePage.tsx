import React, { useEffect } from "react";
import { getImages } from "../../store/reducers/ActionCreators";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

export const HomePage: React.FC = () => {
    const images  = useAppSelector((state) => state.ImageState.images);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getImages());
    }, [])
    return (
        <div>
            {images && images.map(({id, url}) => (
                <div key={id}>
                    <img src={url} alt="" />
                </div>
            ))}
        </div>
    );
}