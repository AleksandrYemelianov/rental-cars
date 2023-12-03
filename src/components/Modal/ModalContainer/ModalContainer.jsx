import sprite from '../../../images/svg/inlineSprite.svg';
import css from './ModalContainer.module.css';

export default function ModalContainer({children, onClose}) {
    return (
        <div className={css.modalContainer}>
            <svg className={css.modalContainerIconClose} onClick={onClose}>
                <use href={`${sprite}#icon-close`}></use>
            </svg>
            {children}
        </div>
    );
}
