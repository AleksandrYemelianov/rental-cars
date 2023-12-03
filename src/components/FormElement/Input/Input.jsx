import css from './Input.module.css';

export const Input = ({ name, value, onChange, text }) => {
    let style = null
    if (name === 'from') {
    style = css.inputFrom
    } else if (name === 'to') {
    style = css.inputTo
    }
    return (
        <div className={css.inputRelative}>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                className={`${css.input} ${style}`} />
            <p className={css.inputText}>{`${text}:`}</p>
        </div>
    )
};
