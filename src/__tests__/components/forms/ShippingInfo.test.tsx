import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import { ShippingInfo } from '../../../components/Index';

const initialState: any = {address: {
    navigatorAddress: []
}};
const mockStore = configureStore();
let store: any;

describe('shipping info component:', () => {
    store = mockStore(initialState)
    
    it('should render correctly Shipping info component', () => {
        store = mockStore(initialState);
        const component = renderer.create(
            <Provider store={store}>
                <BrowserRouter>
                    <ShippingInfo />
                </BrowserRouter>
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });
});

describe('Check name field in Shipping info component', () => {
    store = mockStore(initialState)
    const component = mount(
        <Provider store={store}>
            <BrowserRouter>
                <ShippingInfo />
            </BrowserRouter>
        </Provider>)

    const nameInput = component.find('input[name="name"]')

    it('should have name field', () => {
        expect(nameInput.length).toEqual(1);
    });

    it('should have props', () => {
        expect(nameInput.props()).toEqual({
            className: 'form-control',
            id: 'name',
            name: 'name',
            type: 'text',
            onChange: nameInput.prop('onChange'),
            onBlur: nameInput.prop('onBlur'),
            value: '',
            placeholder: 'Full Name',
            readOnly: undefined,
            size: undefined
        });
    });

    it('should set the name value on change event', () => {
        nameInput.simulate('change', {
            target: { value: 'Vasya Pupkin' } 
        });
        const inputAfterChange = component.find('input[name="name"]');
        expect(inputAfterChange.prop('value')).toEqual('Vasya Pupkin');
    });
});

describe('check phone field', () => {
    store = mockStore(initialState)
    const component = mount(
        <Provider store={store}>
            <BrowserRouter>
                <ShippingInfo />
            </BrowserRouter>
        </Provider>)

    const phoneInput = component.find('input[type="tel"]');

    it('should have phone field', () => {
        expect(phoneInput.length).toEqual(1);
    });

    it('should have props', () => {
        expect(phoneInput.props()).toEqual({
            className: 'form-control ',
            type: 'tel',
            disabled: false,
            onBlur: phoneInput.prop('onBlur'),
            onChange: phoneInput.prop('onChange'),
            onClick: phoneInput.prop('onClick'),
            onCopy: phoneInput.prop('onCopy'),
            onDoubleClick: phoneInput.prop('onDoubleClick'),
            onFocus: phoneInput.prop('onFocus'),
            onKeyDown: phoneInput.prop('onKeyDown'),
            style: phoneInput.prop('style'),
            value: '',
            placeholder: 'Daytime Phone'
        });
    });

    it('should set the phone value on change event', () => {
        phoneInput.simulate('change', {
            target: { value: '78005553535' }
        });

        const inputAfterChange = component.find('input[type="tel"]');
        expect(inputAfterChange.prop('value')).toEqual('+7 (800) 555-35-35');
    });
});

describe('check street field', () => {
    store = mockStore(initialState)
    const component = mount(
        <Provider store={store}>
            <BrowserRouter>
                <ShippingInfo />
            </BrowserRouter>
        </Provider>)

    const streetInput = component.find('input[name="street"]');

    it('should have street field', () => {
        expect(streetInput.length).toEqual(1);
    });

    it('should have props', () => {
        expect(streetInput.props()).toEqual({
            className: 'form-control',
            id: 'street',
            name: 'street',
            type: 'text',
            onChange: streetInput.prop('onChange'),
            onBlur: streetInput.prop('onBlur'),
            onFocus: streetInput.prop('onFocus'),
            value: '',
            placeholder: 'Street address',
            readOnly: undefined,
            size: undefined
        });
    });

    it('should set the street value on change event', () => {
        streetInput.simulate('change', {
            target: { value: '9 Kolotushina' }
        });

        const inputAfterChange = component.find('input[name="street"]');
        expect(inputAfterChange.prop('value')).toEqual('9 Kolotushina');
    });
});

describe('check optional field', () => {
    store = mockStore(initialState)
    const component = mount(
        <Provider store={store}>
            <BrowserRouter>
                <ShippingInfo />
            </BrowserRouter>
        </Provider>)

    const optionalInput = component.find('input[name="optional"]');

    it('should have optional field', () => {
        expect(optionalInput.length).toEqual(1);
    });

    it('should have props', () => {
        expect(optionalInput.props()).toEqual({
            className: 'form-control',
            id: 'optional',
            name: 'optional',
            type: 'text',
            onChange: optionalInput.prop('onChange'),
            onBlur: optionalInput.prop('onBlur'),
            value: '',
            placeholder: 'Apt, Suit, Bidg, Gate Code. (optional)',
            readOnly: undefined,
            size: undefined
        });
    });

    it('should set the optional value on change event', () => {
        optionalInput.simulate('change', {
            target: { value: 'Door code: 3322' }
        });

        const inputAfterChange = component.find('input[name="optional"]');
        expect(inputAfterChange.prop('value')).toEqual('Door code: 3322');
    });
});

describe('check city field', () => {
    store = mockStore(initialState)
    const component = mount(
        <Provider store={store}>
            <BrowserRouter>
                <ShippingInfo />
            </BrowserRouter>
        </Provider>)

    const cityInput = component.find('input[name="city"]');

    it('should have city field', () => {
        expect(cityInput.length).toEqual(1);
    });

    it('should have props', () => {
        expect(cityInput.props()).toEqual({
            className: 'form-control',
            id: 'city',
            name: 'city',
            type: 'text',
            onChange: cityInput.prop('onChange'),
            onBlur: cityInput.prop('onBlur'),
            value: '',
            placeholder: 'City',
            readOnly: undefined,
            size: undefined
        });
    });

    it('should set the city value on change event', () => {
        cityInput.simulate('change', {
            target: { value: 'Laplandia' }
        });

        const inputAfterChange = component.find('input[name="city"]');
        expect(inputAfterChange.prop('value')).toEqual('Laplandia');
    });
});

describe('check zip field', () => {
    store = mockStore(initialState)
    const component = mount(
        <Provider store={store}>
            <BrowserRouter>
                <ShippingInfo />
            </BrowserRouter>
        </Provider>)

    const zipInput = component.find('input[name="zip"]');

    it('should have zip field', () => {
        expect(zipInput.length).toEqual(1);
    });

    it('should have props', () => {
        expect(zipInput.props()).toEqual({
            className: 'form-control',
            id: 'zip',
            name: 'zip',
            type: 'text',
            onChange: zipInput.prop('onChange'),
            onBlur: zipInput.prop('onBlur'),
            value: '',
            placeholder: 'ZIP',
            readOnly: undefined,
            size: undefined
        });
    });

    it('should set the zip value on change event', () => {
        zipInput.simulate('change', {
            target: { value: '3221344' }
        });

        const inputAfterChange = component.find('input[name="zip"]');
        expect(inputAfterChange.prop('value')).toEqual('3221344');
    });
});

describe('Submit button', () => {
    store = mockStore(initialState);
    const component = mount(
        <Provider store={store}>
            <BrowserRouter>
                <ShippingInfo />
            </BrowserRouter>
        </Provider>
    );

    const button = component.find('button[type="submit"]');

    it('should have submit button', () => {
        expect(button.length).toEqual(1);
    });

    it('should submit on click', () => {
        const mockHandleSubmit = jest.fn();
        component.find('form').prop('onSubmit')(mockHandleSubmit());
        button.simulate('click');

        expect(mockHandleSubmit).toHaveBeenCalled();
    });
});
