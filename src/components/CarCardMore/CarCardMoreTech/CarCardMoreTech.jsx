import css from './CarCardMoreTech.module.css';

export const CarCardMoreTech = ({ car }) => {
    const { address, type, year, id, fuelConsumption, engineSize } = car;
    const city = address.split(', ')[1];
    const country = address.split(', ')[2];
    return (
        <div className={css.moreTechWrapper}>
            <ul className={css.moreTechContainer}>
                <li className={css.moreTechText}>{city}</li>
                <li className={css.moreTechText}>{country}</li>
                <li className={css.moreTechText}>Id: {id}</li>
                <li className={css.moreTechText}>Year: {year}</li>
                <li className={css.moreTechText}>Type: {type}</li>
            </ul>
            <ul className={css.moreTechContainer}>
                <li className={css.moreTechText}>Fuel Consumption: {fuelConsumption}</li>
                <li className={css.moreTechText}>Engine Size: {engineSize}</li>
            </ul>
        </div>
    );
};
