// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCars } from 'redux/cars/carsSelectors';
// import { getFilters } from 'redux/filters/filtersSelectors';
// import { fetchAllCars } from 'redux/cars/carsOperations';
import { FormFilter } from 'components/FormFilter/FormFilter'
// import { CarsList } from 'components/CarsList/CarsList';

const FavoritesPage = () => {
    // const dispatch = useDispatch();
    // const cars = useSelector(getCars);
    // const params = useSelector(getFilters);

    // useEffect(() => {
    //   dispatch(fetchAllCars(params));
    // }, [dispatch, params]);

    return (
      <>
        <FormFilter />
        {/* <CarsList cars={cars} /> */}
      </>
    );
};

export default FavoritesPage
