import { CarsList } from 'components/CarsList/CarsList';
import { FormFilter } from 'components/FormFilter/FormFilter'
import React from 'react'

export const Catalog = () => {
    return (
        <>
            <FormFilter />
            <CarsList />
        </>
    )
};

