import React from 'react'
import carImage from '../../images/car-rental.jpg';
import css from './NotFoundItem.module.css';


export const NotFoundItem = ({text}) => {
    return (
        <div className={css.notFoundItemContainer}>
            <div className={css.notFoundItemWrapperImg}>
                <img src={carImage} alt="rental-car" />
            </div>
            <p>
                {text}
            </p>
        </div>
    )
};
