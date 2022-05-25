import React from 'react';
import { useQuery } from '@apollo/client';

import { Loader, StuffItems } from '../Index';
import { TAKE_PRODUCTS } from '../../api';

import { LoaderContainer } from '../../styles/OrderPlateStyles';

interface queryProducts {
    id: number,
    name: string,
    price: number,
    imgUrl: string,
    color: string
}

const Stuff = () => {
    const { loading, error, data } = useQuery(TAKE_PRODUCTS)

    if (loading) {
        return (<LoaderContainer data-testid="loading">
                <Loader />
            </LoaderContainer>);
    }

    if (error) { 
        return (
        <LoaderContainer data-testid="loading">
            Somthing wrong
            <Loader />
        </LoaderContainer>)
    }

    return data.products.map((stuff: queryProducts) => (<StuffItems stuff={stuff} key={stuff.id} />))
};

export default Stuff;
