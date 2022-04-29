import React from 'react';
import { useSelector } from 'react-redux';

import { AddressesList, ListItems } from '../../styles/FormStyle';

import type { RootState } from '../../types';

const DropdownAddresses = (props) => {
    const addresses = useSelector((state: RootState) => state.address.addresses);
    return (addresses !== (null || undefined) && (
        <AddressesList>
            {addresses.map(address => (
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
