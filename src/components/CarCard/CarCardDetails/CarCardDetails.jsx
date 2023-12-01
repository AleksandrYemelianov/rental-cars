import React from 'react'
import { nanoid } from 'nanoid'
import { collectCardInfo } from 'utils/collectCardInfo';

import css from './CarCardDetails.module.css';

export const CarCardDetails = ({ car }) => {
    const carInfo = collectCardInfo(car)

    return (
        <div className={css.carDetailsContainer}>
            {carInfo.map(info => <p key={nanoid()} className={css.carDetailsText}>{info}</p>)}
        </div>
    )
};
