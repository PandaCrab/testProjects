import React, { useMemo } from 'react';
import Select from 'react-select'
import countryList from 'react-select-country-list';

import { ErrorMessage } from '../../styles/FormStyle';
interface propTypes {
    name: string,
    id: string,
    value: string,
    onChange: any,
    onBlur: any
    placeholder: string,
    onInputChange: (arg0: string) => void,
    touched: boolean,
    error: string
};

const CountriesSelect = (props: propTypes) => {
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
                defaultInputValue={props.value}
                onInputChange={(value, {action}) => {
                    if (action  === 'input-change') {props.onInputChange(value)}
                }}
                placeholder={props.value ? props.value : props.placeholder}
                />
                {props.touched && !!props.error && (
                <ErrorMessage>{props.error}</ErrorMessage>
                )}
        </>
    );
};

export default CountriesSelect;
