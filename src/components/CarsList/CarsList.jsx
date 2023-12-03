import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Button } from "components/Button/Button";
import { CarsItem } from "components/CarsItem/CarsItem"
import { Loader } from "components/Loader/Loader";
import { NotFoundItem } from "components/NotFoundItem/NotFoundItem";
import { NOT_FOUND_ITEM } from "constants/messages";
import { fetchAllCars } from "redux/cars/carsOperations";
import { getCars, isLoading, isLoadMore } from "redux/cars/carsSelectors";
import { setFilter } from "redux/filters/filtersAction";
import { getFilters } from "redux/filters/filtersSelectors";

import css from './CarsList.module.css'

export const CarsList = () => {
    const dispatch = useDispatch()
    const cars = useSelector(getCars);
    const loading = useSelector(isLoading)
    const loadMore = useSelector(isLoadMore)
    const params = useSelector(getFilters)
    const visibleLoadMore = !loading && cars.length !== 0 && !loadMore

    useEffect(() => {
        dispatch(fetchAllCars(params));
    }, [dispatch, params]);
    
    const handleClick = (e) => {
        dispatch(setFilter({page: params.page + 1}));
    }

    return (
        <>
            <div className={css.listContainer}>
                {loading && <Loader />}
                {cars.length === 0 && !loading && <NotFoundItem text={NOT_FOUND_ITEM}/>}
                {cars.map(car => <CarsItem key={car.id} car={car} />)}
            </div>
            { visibleLoadMore && <Button onClick={handleClick} size={'link'} text={'Load more'} />}
        </>
    )
};

