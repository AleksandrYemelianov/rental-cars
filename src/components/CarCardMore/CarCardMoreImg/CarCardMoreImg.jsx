import css from './CarCardMoreImg.module.css';

export const CarCardMoreImg = ({img, make}) => {
  return (
      <div className={css.moreImgContainer}>
          <img src={img} alt={make} className={css.moreImg}/>
    </div>
  )
}
