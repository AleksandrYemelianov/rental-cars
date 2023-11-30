import css from './CarCardDescription.module.css';

export const CarCardDescription = ({ car: { model, make, year, rentalPrice } }) => {
    return (
        <div className={css.cardDescriptionWrapper}>
            <p className={css.cardDescriptionTitle}>{make}<span className={css.cardDescriptionAccent}>{model},</span>{year}</p>
            <p>{rentalPrice}</p>
        </div>
    )
};
