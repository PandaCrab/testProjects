import {
    render
} from '@testing-library/react';
import '@testing-library/jest-dom';

import { CountriesSelect } from '../../../components/Index';

const props = {
    name: 'country',
    id: 'country',
    value: 'Ukraine',
    onChange: jest.fn(),
    onBlur: jest.fn(),
    onInputChange: jest.fn(),
    placeholder: 'Country',
    touched: false,
    error: ''
};

const setup = () => render(
    <CountriesSelect {...props} />
);

it('should match snapshot', () => {
    expect(setup()).toMatchSnapshot();
});
