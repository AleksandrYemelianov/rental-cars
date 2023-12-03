import css from './CarCardMoreDescription.module.css';

export const CarCardMoreDescription = ({description}) => {
  return (
      <p className={css.moreDescription}>{description}</p>
  )
}
