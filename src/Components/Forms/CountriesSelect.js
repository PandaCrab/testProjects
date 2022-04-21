import React, { useMemo } from 'react';
import Select from 'react-select'
import countryList from 'react-select-country-list';

export const CountriesSelect = (props) => {
    const options = useMemo(() => countryList().getData(), [])
    return (
        <Select
            menuPlacement='top'
            options={options}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onBlur={props.onBlur}
            inputValue={props.value}
            aria-invalid={props.isInvalid}
            />
    );
};
