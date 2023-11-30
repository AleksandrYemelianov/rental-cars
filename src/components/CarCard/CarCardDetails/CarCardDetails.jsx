import React from 'react'
import { nanoid } from 'nanoid'
import { collectCardInfo } from 'utils/collectCardInfo';

import css from './CarCardDetails.module.css';

export const CarCardDetails = ({ car }) => {
    const carInfo = collectCardInfo(car)
    const blockFirst = carInfo.slice(0, 4);
    const blockSecond = carInfo.slice(4);
    return (
        <div className={css.carDetailsContainer}>
            {blockFirst.map(first => <p key={nanoid()} className={css.carDetailsTextFirst}>{first}</p>)}
            {blockSecond.map(second => <p key={nanoid()} className={css.carDetailsTextSecond}>{second}</p>)}
        </div>
    )
};
