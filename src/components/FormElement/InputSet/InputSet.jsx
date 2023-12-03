import css from './InputSet.module.css';

export const InputSet = ({children}) => {
    return (
        <div className={css.formInputWrapper}>
            {children}
        </div>
    )
};
