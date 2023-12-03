import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { addFavorite, deleteFavorite } from 'redux/favorites/favoritesActions';
import { getFavorites } from 'redux/favorites/favoritesSelectors';

import { CarCardDescription } from 'components/CarCard/CarCardDescription/CarCardDescription';
import { CarCardDetails } from 'components/CarCard/CarCardDetails/CarCardDetails';
import { Button } from 'components/Button/Button';
import { ModalBackdrop } from 'components/Modal/ModalBackdrop/ModalBackdrop';

import sprite from '../../images/svg/inlineSprite.svg';
import css from './CarsItem.module.css';

export const CarsItem = ({ car }) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false)
    const favorites = useSelector(getFavorites)
    const isExist = favorites.find(favorite => favorite.id === car.id)
    const style = isExist && css.cardIconActive

    const handleClick = () => {
        isExist ?
            dispatch(deleteFavorite(car.id)) :
            dispatch(addFavorite(car))
    };

    const handleModalToggle = () => {
        setShowModal(state => !state)
    }

    return (
        <>
            <div className={css.cardContainer}>
                <div className={css.imgWrapper}>
                    <img src={car.img || car.photoLink} alt={car.model} width='274' height='268'/>
                    <button onClick={handleClick} type='button' className={css.cardIconButton}>
                        <svg className={`${css.cardIcon} ${style}`}>
                            <use href={`${sprite}#icon-heart`}></use>
                        </svg>
                    </button>
                </div>
                <CarCardDescription car={car} />
                <CarCardDetails car={car} />
                <Button onClick={handleModalToggle} size={'l'} text={'Learn more'} />
            </div>
            {showModal && createPortal(
                <ModalBackdrop car={car} onClose={handleModalToggle} />,
                document.body)
            }
        </>
    )
};

