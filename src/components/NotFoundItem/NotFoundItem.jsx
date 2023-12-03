import React from 'react'
import carImage from '../../images/car-rental.jpg';
import css from './NotFoundItem.module.css';


export const NotFoundItem = () => {
    return (
        <div className={css.notFoundItemContainer}>
            <div className={css.notFoundItemWrapperImg}>
                <img src={carImage} alt="rental-car" />
            </div>
            <p>
                Sorry, but there are no cars in our database according to the selected parameters. Please try other parameters.
            </p>
        </div>
    )
};
