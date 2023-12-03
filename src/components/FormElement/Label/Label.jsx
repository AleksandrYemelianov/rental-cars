import css from './Label.module.css';

export const Label = ({ text, children }) => {
    return (
        <label className={css.formLabel}>
            {text}
            {children}
        </label>
    )
};
