import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getStuff } from '../../Redux/modules/stuffReducer';
import { StuffItems} from './StuffItems';

export const Stuff = () => {
        const dispatch = useDispatch();
        const stuffs = useSelector(state => state.order.stuff); 

        if (!stuffs.length) {
            return <button onClick={dispatch(getStuff())}>click me</button>
        }
        return stuffs.map(stuff => <StuffItems stuff={stuff} key={stuff.id} /> )
    };
