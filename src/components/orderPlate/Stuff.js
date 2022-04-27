import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loader, StuffItems } from '../Index';
import { getStuff } from '../../redux/ducks/stuff';

import { LoaderContainer } from '../../styles/OrderPlateStyles';

const Stuff = () => {
    const dispatch = useDispatch();
    const stuffs = useSelector(state => state.order.stuff); 
    const loading = useSelector(state => state.order.loading);

    if (loading) {
        return (<LoaderContainer>
                <Loader />
            </LoaderContainer>);
    };

    if (!stuffs.length) dispatch(getStuff());
    return stuffs.map(stuff => (<StuffItems stuff={stuff} key={stuff.id} />));
};

export default Stuff;
