import { useSelector } from 'react-redux';
import { CarsItem } from 'components/CarsItem/CarsItem';
import { getFavorites } from 'redux/favorites/favoritesSelectors';
import { NotFoundItem } from 'components/NotFoundItem/NotFoundItem';
import { FAVORITES_IS_EMPTY } from 'constants/messages';

import css from './FavoritesList.module.css';

export const FavoritesList = () => {
    const cars = useSelector(getFavorites);

    return (
        <>
            <div className={css.listContainer}>
                {cars.length === 0 && <NotFoundItem text={FAVORITES_IS_EMPTY}/>}
                {cars.map(car => <CarsItem key={car.id} car={car} />)}
            </div>
        </>
    )
};
