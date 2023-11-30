import React from 'react'
import { Button } from 'components/Button/Button'

import css from './FormFilter.module.css';

export const FormFilter = () => {
    return (
        <form action="" className={css.formContainer}>
            <div style={{ display: 'flex' }}>
                <label style={{ display: 'flex', flexDirection: 'column' }}>
                    Car brand
                    <select name="model">
                        <option value=""></option>
                    </select>
                </label>
                <label style={{ display: 'flex', flexDirection: 'column' }}>
                    Price/ 1 hour
                    <select name="price">
                        <option value=""></option>
                    </select>
                </label>
                <label style={{ display: 'flex', flexDirection: 'column' }}>
                    Сar mileage / km
                    <input type="text" placeholder="From" />
                    <input type="text" placeholder="To" />
                </label>
            </div>
            <Button text={'Search'} />
        </form>
    )
};

