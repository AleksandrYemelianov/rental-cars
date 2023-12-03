import css from './CarCardMoreTitle.module.css';

export const CarCardMoreTitle = ({ car: { model, make, year } }) => {
    return (
        <div className={css.moreTitleContainer}>
            <h2 className={css.moreTitle}>{make}<span className={css.moreTitleAccent}>{model},</span>{year}</h2>
        </div>
    )
};
