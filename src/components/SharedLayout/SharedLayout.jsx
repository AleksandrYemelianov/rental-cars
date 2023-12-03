import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom';

import css from './SharedLayout.module.css'

const SharedLayout = () => {
    return (
        <Container>
            <nav className={css.header}>
                <NavLink to='/catalog' className={({isActive}) => isActive ? css.active : css.link}>Catalog</NavLink>
                <NavLink to='/favorites' className={({isActive}) => isActive ? css.active : css.link}>Favorites</NavLink>
            </nav>
            <Section>
                <Suspense>
                    <Outlet/>
                </Suspense>
            </Section>
        </Container>
    );
};

export default SharedLayout