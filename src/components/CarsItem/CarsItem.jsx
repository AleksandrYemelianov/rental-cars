import React from 'react'

import { CarCardDescription } from 'components/CarCard/CarCardDescription/CarCardDescription';
import { CarCardDetails } from 'components/CarCard/CarCardDetails/CarCardDetails';
import sprite from '../../images/svg/inlineSprite.svg';

import css from './CarsItem.module.css';
import { Button } from 'components/Button/Button';

export const CarsItem = ({ car }) => {
    return (
        <div className={css.cardContainer}>
            <div className={css.imgWrapper}>
                <img src={car.img} alt={car.model} width='274' height='268' />
                <button type='button' className={css.cardIconButton}>
                    <svg className={css.cardIcon}>
                        <use href={`${sprite}#icon-heart`}></use>
                    </svg>
                </button>
            </div>
            <CarCardDescription car={car} />
            <CarCardDetails car={car} />
            <Button size={'l'} text={'Learn more'} />
        </div>
    )
};

