import React from 'react'
import { Button } from 'components/Button/Button';
import { CarCardDescription } from 'components/CarCard/CarCardDescription/CarCardDescription';
import { CarCardDetails } from 'components/CarCard/CarCardDetails/CarCardDetails';

import css from './CarsItem.module.css';
import sprite from '../../images/svg/inlineSprite.svg';

export const CarsItem = ({ car }) => {
    return (
        <div className={css.cardContainer}>
            <div className={css.imgWrapper}>
                <img src={car.img} alt={car.model} width='274' height='268' />
                <svg className={css.cardIcon}>
                    <use href={`${sprite}#icon-heart`}></use>
                </svg>
            </div>
            <CarCardDescription car={car} />
            <CarCardDetails car={car}/>
            <Button />
        </div>
    )
};

