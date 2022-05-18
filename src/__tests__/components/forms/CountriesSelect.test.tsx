import { mount } from 'enzyme';

import {CountriesSelect} from '../../../components/Index';

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

const component = mount(
    <CountriesSelect
        {...props}
    />);

describe('Countrie select component', () => {    
    it('should rendered correctly select component', () => {
        expect(component).toMatchSnapshot();
    });

    it('should chnage value', () => {
        component.prop('onChange')({
            target: { value: 'United States' } 
        });

        setTimeout(() => expect(component.prop('value')).toEqual('United States'), 100);
    });

    it('should change input value', () => {
        const inputValueChange = jest.fn();

        component.prop('onInputChange')(inputValueChange());

        setTimeout(() => expect(component.prop('inputValue')).toEqual('United States'), 100);
    });

    it('should called with inputValueChange', () => {
        const inputValueChange = jest.fn();

        component.prop('onInputChange')(inputValueChange());

        expect(inputValueChange).toHaveBeenCalled();
    });
});
