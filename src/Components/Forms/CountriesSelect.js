import React from 'react';

import { countryList } from '../../helpers';

export const CountriesSelect = (props) => (
        <datalist id={props.id}>     
            {countryList.map(country => 
                (<option key={Object.keys(country)} value={Object.values(country)}>
                {Object.values(country)}
                </option >))}
        </datalist>);
