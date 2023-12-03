import { nanoid } from 'nanoid'

import css from './CarCardMoreFeatures.module.css';

export const CarCardMoreFeatures = ({ accessories, functionalities }) => {
    return (
        <div className={css.moreFeaturesContainer}>
            <h3 className={css.moreFeaturesTitle}>Accessories and functionalities:</h3>
            <ul className={css.moreFeaturesWrapper}>
                {accessories.map(accessory => <li key={nanoid()} className={css.moreFeaturesText}>{accessory}</li>)}
            </ul>
            <ul className={css.moreFeaturesWrapper}>
                {functionalities.map(functional => <li key={nanoid()} className={css.moreFeaturesText}>{functional}</li>)}
            </ul>
        </div>
    )
};
