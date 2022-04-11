import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from '../Loader';
import { getStuff } from '../redux/ducks/stuff';
import { StuffItems } from './StuffItems';

import { LoaderContainer } from '../../styles/OrderPlateStyles';

export const Stuff = () => {
    const dispatch = useDispatch();
    const stuffs = useSelector(state => state.order.stuff); 
    const loading = useSelector(state => state.order.loading);

    if (loading) {
        return <LoaderContainer>
                <Loader />
            </LoaderContainer>
    }

    if (!stuffs.length) return dispatch(getStuff())
    return stuffs.map(stuff => <StuffItems stuff={stuff} key={stuff.id} /> )
};
