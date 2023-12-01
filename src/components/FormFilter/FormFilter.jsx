import React from 'react'
import { Button } from 'components/Button/Button'

import css from './FormFilter.module.css';

export const FormFilter = () => {
    return (
        <form className={css.formContainer}>
            <label className={css.formLabel}>
                Car brand
                <select name="model" className={`${css.formElement} ${css.formElementBrand}`}>
                    <option value="" selected className={css.formOptionDefault}>Enter the text</option>
                </select>
            </label>
            <label className={css.formLabel}>
                Price / 1 hour
                <select name="price" className={`${css.formElement} ${css.formElementPrice}`}>
                    <option value="" selected className={css.formOptionDefault}>To $</option>
                </select>
            </label>
            <label className={css.formLabel}>
                Сar mileage / km
                <div className={css.formInputWrapper}>
                    <div className={css.formInputRelative}>
                        <input type="text" className={css.formElementInput} />
                        <p className={css.formElementInputText}>From:</p>
                    </div>
                    <div className={css.formInputRelative}>
                        <input type="text" className={`${css.formElementInput} ${css.formElementInputLast}`} />
                        <p className={css.formElementInputText}>To:</p>
                    </div>
                </div>
            </label>
            <Button type={'submit'} size={'m'} text={'Search'} />
        </form>
    )
};

