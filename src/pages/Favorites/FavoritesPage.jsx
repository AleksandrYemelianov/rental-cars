import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCarsEmpty, setLoadMore } from 'redux/cars/carsActions';
import { setFilter } from 'redux/filters/filtersAction';
import { FavoritesList } from 'components/FavoritesList/FavoritesList';


const FavoritesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCarsEmpty());
    dispatch(setLoadMore(false));
    dispatch(setFilter({ page: 1 }));
  }, [dispatch]);

  return (
    <>
      <FavoritesList />
    </>
  );
};

export default FavoritesPage
