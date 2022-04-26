import React, { useMemo } from 'react';
import Select from 'react-select'
import countryList from 'react-select-country-list';

import { ErrorMessage } from '../../styles/FormStyle';

export const CountriesSelect = (props) => {
    const options = useMemo(() => countryList().getData(), []);

    return (
        <>
            <Select
                name={props.name}
                id={props.id}
                menuPlacement='top'
                options={options}
                onChange={props.onChange}
                onBlur={props.onBlur}
                onInputChange={(value, {action}) => {
                    if (action  === "input-change") props.onInputChange(value)
                }}
                placeholder={props.placeholder}
                />
                {
                    props.touched && !!props.error &&
                    (<ErrorMessage>{props.error}</ErrorMessage>)
                }
        </>
    );
};
