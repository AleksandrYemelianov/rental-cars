import React, { useEffect, useState } from 'react'
import { Button } from 'components/Button/Button'
import makes from '../../resource/makes.json';

import css from './FormFilter.module.css';
import { getCars } from 'redux/cars/carsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { rentalPrice } from 'utils/rentalPrice';
import { Select } from 'components/FormElement/Select/Select';
import { Label } from 'components/FormElement/Label/Label';
import { InputSet } from 'components/FormElement/InputSet/InputSet';
import { Input } from 'components/FormElement/Input/Input';
import { setFilter } from 'redux/filters/filtersAction';
import { getFilters } from 'redux/filters/filtersSelectors';
import { setCarsEmpty } from 'redux/cars/carsActions';

export const FormFilter = () => {
    const dispatch = useDispatch()
    const [brand, setBrand] = useState('all');
    const [price, setPrice] = useState('');
    const [mileageFrom, setMileageFrom] = useState('')
    const [mileageTo, setMileageTo] = useState('')
    const cars = useSelector(getCars);
    const filters = useSelector(getFilters)

    useEffect(() => {
        if (filters) {
            setBrand(filters.make)
            setPrice(filters.priceTo)
            setMileageFrom(filters.mileageFrom)
            setMileageTo(filters.mileageTo)
        }
   }, [filters])

    const priceSelect = rentalPrice(cars)
    
    const handleBrandChange = (e) => {
        setBrand(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleMileageChange = (e) => {
        const currentValue = e.target.name;
        if (currentValue === 'from') setMileageFrom(e.target.value);
        if (currentValue === 'to') setMileageTo(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = {
            make: brand,
            priceTo: price,
            mileageFrom,
            mileageTo,
        }
        dispatch(setCarsEmpty())
        dispatch(setFilter({...params, page: 1}));
    }

    return (
        <form onSubmit={handleSubmit} className={css.formContainer}>
            <Label text={'Car brand'}>
                <Select
                    name={'model'}
                    data={makes}
                    value={brand}
                    onChange={handleBrandChange}
                    text={'Enter the text'}
                />
            </Label>
            <Label text={'Price / 1 hour'}>
                <Select
                    name={'price'}
                    data={priceSelect}
                    value={price}
                    onChange={handlePriceChange}
                    text={'To $'}
                />
            </Label>
            <Label text={'Сar mileage / km'}>
                <InputSet>
                    <Input name={'from'} value={mileageFrom} onChange={handleMileageChange} text={'From'} />
                    <Input name={'to'} value={mileageTo} onChange={handleMileageChange} text={'To'} />
                </InputSet>
            </Label>
            <Button type={'submit'} size={'m'} text={'Search'} />
        </form>
    )
};

