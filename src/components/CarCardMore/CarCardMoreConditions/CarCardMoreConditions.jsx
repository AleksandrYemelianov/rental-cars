import css from './CarCardMoreConditions.module.css';

export const CarCardMoreConditions = ({ car }) => {
    
    const { rentalPrice, rentalConditions, mileage } = car;
    const conditions = rentalConditions.split('\n');
    const age = conditions[0].split(' ');
    const price = Number(rentalPrice.replace('$', ''));
    const currentMileage = (mileage / 1000).toString().replace('.', ',')

  return (
      <div className={css.moreConditionsContainer}>
          <h3 className={css.moreConditionsTitle}>Rental Conditions:</h3>
          <ul className={css.moreConditionsList}>
              <li className={css.moreConditionsItem}>Minimum age : <span className={css.moreConditionsItemAccent}>{age[2]}</span></li>
              <li className={css.moreConditionsItem}>{conditions[1]}</li>
              <li className={css.moreConditionsItem}>{conditions[2]}</li>
              <li className={css.moreConditionsItem}>Mileage: <span className={css.moreConditionsItemAccent}>{currentMileage}</span></li>
              <li className={css.moreConditionsItem}>Price: <span className={css.moreConditionsItemAccent}>{price}$</span></li>
          </ul>
    </div>
  )
}
