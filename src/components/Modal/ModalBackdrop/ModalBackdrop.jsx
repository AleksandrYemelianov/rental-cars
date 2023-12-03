import { CarCardMoreConditions } from 'components/CarCardMore/CarCardMoreConditions/CarCardMoreConditions';
import { CarCardMoreDescription } from 'components/CarCardMore/CarCardMoreDescription/CarCardMoreDescription';
import { CarCardMoreFeatures } from 'components/CarCardMore/CarCardMoreFeatures/CarCardMoreFeatures';
import { CarCardMoreImg } from 'components/CarCardMore/CarCardMoreImg/CarCardMoreImg';
import { CarCardMoreTech } from 'components/CarCardMore/CarCardMoreTech/CarCardMoreTech';
import { CarCardMoreTitle } from 'components/CarCardMore/CarCardMoreTitle/CarCardMoreTitle';
import { LinkContact } from 'components/LinkContact/LinkContact';
import { useEffect } from 'react';
import ModalContainer from '../ModalContainer/ModalContainer';
import css from './ModalBackdrop.module.css';

export const ModalBackdrop = ({ car, onClose }) => {
    useEffect(() => {
        const onEscapePress = (e) => {
            if (e.code === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', onEscapePress);
        return () => {
            window.removeEventListener('keydown', onEscapePress);
        };
    }, [onClose]);

    const handleCloseModal = () => {
        onClose();
    };

    const onBackdropClick = (e) => {
        const current = e.currentTarget === e.target
        if (current) {
            onClose();
        }
    };
    return (
        <div className={css.overlay} onClick={onBackdropClick}>
            <ModalContainer onClose={handleCloseModal}>
                <CarCardMoreImg img={car.img || car.photoLink} make={car.make} />
                <CarCardMoreTitle car={car} />
                <CarCardMoreTech car={car} />
                <CarCardMoreDescription description={car.description} />
                <CarCardMoreFeatures accessories={car.accessories} functionalities={car.functionalities} />
                <CarCardMoreConditions car={car} />
                <LinkContact number={'+380730000000'} text={'Rental car'}/>
            </ModalContainer>
        </div>
    )
};
