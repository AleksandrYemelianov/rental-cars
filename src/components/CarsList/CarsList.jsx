import { Button } from "components/Button/Button";
import { CarsItem } from "components/CarsItem/CarsItem"
import { Loader } from "components/Loader/Loader";
import { NotFoundItem } from "components/NotFoundItem/NotFoundItem";
import { useDispatch, useSelector } from 'react-redux'
import { isLoading, isLoadMore } from "redux/cars/carsSelectors";
import { setFilter } from "redux/filters/filtersAction";
import { getFilters } from "redux/filters/filtersSelectors";

import css from './CarsList.module.css';

export const CarsList = ({cars}) => {
    const dispatch = useDispatch()
    const loading = useSelector(isLoading)
    const loadMore = useSelector(isLoadMore)
    const params = useSelector(getFilters)
    const visibleLoadMore = !loading && cars.length !== 0 && !loadMore

    const handleClick = (e) => {
        dispatch(setFilter({...params, page: params.page + 1}));
    }

    return (
        <>
            <div className={css.listContainer}>
                {loading && <Loader />}
                {cars.length === 0 && !loading && <NotFoundItem />}
                {cars.map(car => <CarsItem key={car.id} car={car} />)}
            </div>
            { visibleLoadMore && <Button onClick={handleClick} size={'link'} text={'Load more'} />}
        </>
    )
};

