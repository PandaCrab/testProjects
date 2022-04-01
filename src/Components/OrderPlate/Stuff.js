import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from '../Loader';
import { getStuff } from '../../Redux/modules/stuffReducer';
import { StuffItems } from './StuffItems';

export const Stuff = () => {
        const dispatch = useDispatch();
        const stuffs = useSelector(state => state.order.stuff); 
        const loading = useSelector(state => state.app.loading);

        if (loading) {return <Loader />}

        if (!stuffs.length) {
            return dispatch(getStuff())
        } else {
            return stuffs.map(stuff => <StuffItems stuff={stuff} key={stuff.id} /> )
        }
    };
