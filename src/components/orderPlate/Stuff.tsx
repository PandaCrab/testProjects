import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loader, StuffItems } from '../Index';
import { getStuff } from '../../redux/ducks/stuff';

import type { RootState } from '../../types';

import { LoaderContainer } from '../../styles/OrderPlateStyles';

const Stuff = () => {
    const dispatch = useDispatch();
    const stuffs = useSelector((state: RootState) => state.order.stuff); 
    const loading = useSelector((state: RootState) => state.order.loading);

    if (loading) {
        return (<LoaderContainer>
                <Loader />
            </LoaderContainer>);
    };

    if (!stuffs.length) dispatch(getStuff());
    return stuffs.map(stuff => (<StuffItems stuff={stuff} key={stuff.id} />));
};

export default Stuff;
