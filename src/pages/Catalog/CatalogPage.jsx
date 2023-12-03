import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CarsList } from 'components/CarsList/CarsList';
import { FormFilter } from 'components/FormFilter/FormFilter'
import { getCars } from 'redux/cars/carsSelectors';
import { fetchAllCars } from 'redux/cars/carsOperations';
import { getFilters } from 'redux/filters/filtersSelectors';

const CatalogPage = () => {
    const dispatch = useDispatch();
    const cars = useSelector(getCars);
    const params = useSelector(getFilters);

    useEffect(() => {
        dispatch(fetchAllCars(params));
    }, [dispatch, params]);

    return (
        <>
            <FormFilter />
            <CarsList cars={cars} />
        </>
    );
};

export default CatalogPage






