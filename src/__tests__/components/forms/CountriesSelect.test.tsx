import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import {CountriesSelect} from '../../../components/Index';

const props: any = {
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

const CountriesComponent = (props: any) => (
    <CountriesSelect
        {...props}
    />);

describe('Countrie select component', () => {

    it('should rendered correctly select component', () => {
        const component = renderer.create(<CountriesComponent />);

        expect(component).toMatchSnapshot();
    });

    it('should rendered with props', () => {
        const component = mount(<CountriesComponent {...props} />);
        expect(component.prop('name')).toEqual('country');
        expect(component.prop('id')).toEqual('country');
        expect(component.prop('value')).toEqual('Ukraine');
        expect(component.prop('onChange')).toBeDefined();
        expect(component.prop('onBlur')).toBeDefined();
        expect(component.prop('onInputChange')).toBeDefined();
        expect(component.prop('placeholder')).toEqual('Country');
        expect(component.prop('touched')).toBeFalsy();
        expect(component.prop('error')).toEqual('');
    });

});
