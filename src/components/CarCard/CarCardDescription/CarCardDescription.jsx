import css from './CarCardDescription.module.css';

export const CarCardDescription = ({ car: { model, make, year, rentalPrice } }) => {
    const modelLength = make.split(' ').length > 1 || make.split('-').length > 1;
    let currentModel = '';
    if (!modelLength) {
        currentModel = model;
    }

    return (
        <div className={css.cardDescriptionWrapper}>
            <p className={css.cardDescriptionTitle}>{make}<span className={css.cardDescriptionAccent}>{currentModel},</span>{year}</p>
            <p>{rentalPrice}</p>
        </div>
    )
};
