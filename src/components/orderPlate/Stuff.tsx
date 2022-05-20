import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loader, StuffItems } from '../Index';
import { getStuff } from '../../redux/ducks/stuff';

import type { AppDispatch, RootState } from '../../types';

import { LoaderContainer } from '../../styles/OrderPlateStyles';

const Stuff = () => {
    const dispatch = useDispatch<AppDispatch>();
    const stuffs = useSelector((state: RootState) => state.order.stuff); 
    const loading = useSelector((state: RootState) => state.order.loading);

    if (loading) {
        return (<LoaderContainer data-testid="loading">
                <Loader />
            </LoaderContainer>);
    };

    if (stuffs && !stuffs.length) { dispatch(getStuff()) }

    return (
        stuffs && stuffs.length && (
            <>
            {stuffs.map((stuff: { id: number }) => (<StuffItems stuff={stuff} key={stuff.id} />))}
            </>
        )
    );
};

export default Stuff;
