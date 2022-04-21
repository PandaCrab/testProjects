import React from 'react';
import { useSelector } from 'react-redux';

import { AddressesList, ListItems } from '../../styles/FormStyle';

export const DropdownAddresses = (props) => {
    const addresses = useSelector(state => state.address.addresses)

    return (
        <AddressesList>
            {addresses === null || undefined ? 
                null
                :
                addresses.map(address => (
                <ListItems 
                    key={address.properties.id}
                    onClick={() => props.autocomplete(
                        address.properties.name,
                        address.properties.locality,
                        address.properties.country
                        )
                    }>{
                        address.properties.label
                    }</ListItems>
            ))}
        </AddressesList>
    )
};
