import React from 'react';
import { useSelector } from 'react-redux';

import { AddressesList, ListItems } from '../../styles/FormStyle';

import type { addressAutocomplete, RootState } from '../../types';

interface propTypes {
    autocomplete: (
        street: string,
        city: string,
        country: string
    ) => void
};

const DropdownAddresses = (props: propTypes) => {
    const addresses = useSelector((state: RootState) => state.address.addresses);
    return (addresses !== (null || undefined) && (
        <AddressesList>
            {addresses.map((address: addressAutocomplete) => (
                <ListItems 
                    key={address.properties.id}
                    onClick={() => props.autocomplete(
                        address.properties.name,
                        address.properties.locality,
                        address.properties.country
                        )}>
                        { address.properties.label }
                </ListItems>
            ))}
        </AddressesList>))
};

export default DropdownAddresses;
