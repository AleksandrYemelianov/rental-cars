import { nanoid } from 'nanoid'
import css from './Select.module.css';

export const Select = ({ name, value, onChange, text, data }) => {
    let style = null
    if (name === 'model') {
    style = css.selectBrand
    } else if (name === 'price') {
    style = css.selectPrice
    }
    return (
        <select name={name} className={`${css.select} ${style}`} value={value} onChange={onChange}>
            <option value="" defaultValue>{ text }</option>
            {data.map(item => <option key={nanoid()} value={item}>{item}</option>)}
        </select>
    )
};
