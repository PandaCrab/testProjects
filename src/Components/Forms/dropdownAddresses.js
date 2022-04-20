import React from 'react';
import { useSelector } from 'react-redux';

import { AddressesList, AddressesListItems } from '../../styles/FormStyle';

export const DropdownAddresses = (props) => {
    const addresses = useSelector(state => state.address.addresses)

    return (
        <AddressesList ref={props.ref}>
            {addresses === null || undefined ? 
                null
                :
                addresses.map(address => (
                <AddressesListItems 
                    key={address.properties.id}
                    onClick={() => props.autocomplete(
                        address.properties.name,
                        address.properties.locality,
                        address.properties.country
                        )
                    }>{
                        address.properties.label
                    }</AddressesListItems>
            ))}
        </AddressesList>
    )
};
