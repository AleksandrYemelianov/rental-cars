import { CarsItem } from "components/CarsItem/CarsItem"
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCars } from "redux/cars/carsOperatins";
import { getCars } from "redux/cars/carsSelectors";

import css from './CarsList.module.css';

export const CarsList = () => {
    const dispatch = useDispatch()
    const cars = useSelector(getCars)

    useEffect(() => {
        const params = {
            page: 1,
            limit: 12,
        };
        dispatch(fetchAllCars(params));
    }, [dispatch]);
    return (
            <div className={css.listContainer}>
                {cars.map(car => <CarsItem key={car.id} car={car} />)}
            </div>
    )
};

