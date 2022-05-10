import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { Payment } from '../../../components/Index';

const initialState = {}
const mockStore = configureStore();
let store;

describe('Payment component:', () => {
    
    it('should render correctly Order plate component', () => {
        store = mockStore(initialState);
        const component = renderer.create(
            <Provider store={store}>
                <BrowserRouter>
                    <Payment />
                </BrowserRouter>
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });
});

describe('Check cardholder field in Payment component', () => {
    store = mockStore(initialState)
    const component = mount(
        <Provider store={store}>
            <BrowserRouter>
                <Payment />
            </BrowserRouter>
        </Provider>)

    const cardholderInput = component.find('input[name="cardholder"]')

    it('should have carholder field', () => {
        expect(cardholderInput.length).toEqual(1);
    });

    it('should have props', () => {
        expect(cardholderInput.props()).toEqual({
            className: 'form-control',
            id: 'cardholder',
            name: 'cardholder',
            type: 'text',
            onChange: cardholderInput.prop('onChange'),
            onBlur: cardholderInput.prop('onBlur'),
            value: '',
            placeholder: 'Name as it appears on your card',
            readOnly: undefined,
            size: undefined
        });
    });

    it('should set the name value on change event', () => {
        cardholderInput.simulate('change', {
            target: { value: 'Pupkin Vasya' } 
        });
        
        const inputAfterChange = component.find('input[name="cardholder"]');
        expect(inputAfterChange.prop('value')).toEqual('Pupkin Vasya');
    });
});

describe('Check card number field', () => {
    store = mockStore(initialState)
    const component = mount(
        <Provider store={store}>
            <BrowserRouter>
                <Payment />
            </BrowserRouter>
        </Provider>)

    const cardNumInput = component.find('input[name="cardNum"]')

    it('should have carholder field', () => {
        expect(cardNumInput.length).toEqual(1);
    });

    it('should have props', () => {
        expect(cardNumInput.props()).toEqual({
            'aria-label': 'Card number',
            autoComplete: 'cc-number',
            className: 'sc-gKXOVf QmbpH form-control',
            id: 'cardNum',
            name: 'cardNum',
            type: 'text',
            onChange: cardNumInput.prop('onChange'),
            onBlur: cardNumInput.prop('onBlur'),
            onFocus: cardNumInput.prop('onFocus'),
            onKeyPress: cardNumInput.prop('onKeyPress'),
            value: '',
            placeholder: 'XXXX XXXX XXXX XXXX XXXX',
            readOnly: undefined,
            size: undefined
        });
    });

    it('should set the name value on change event', () => {
        cardNumInput.simulate('change', {
            target: { value: '4334 5533 5533 3344' } 
        });
        
        const inputAfterChange = component.find('input[name="cardNum"]');
        expect(inputAfterChange.prop('value')).toEqual('4334 5533 5533 3344');
    });
});

describe('Check date field', () => {
    store = mockStore(initialState)
    const component = mount(
        <Provider store={store}>
            <BrowserRouter>
                <Payment />
            </BrowserRouter>
        </Provider>)

    const dateInput = component.find('input[name="date"]')

    it('should have carholder field', () => {
        expect(dateInput.length).toEqual(1);
    });

    it('should have props', () => {
        expect(dateInput.props()).toEqual({
            'aria-label': 'Expiry date in format MM YY',
            autoComplete: 'cc-exp',
            className: 'form-control',
            id: 'date',
            name: 'date',
            type: 'text',
            onChange: dateInput.prop('onChange'),
            onBlur: dateInput.prop('onBlur'),
            onFocus: dateInput.prop('onFocus'),
            onKeyDown: dateInput.prop('onKeyDown'),
            onKeyPress: dateInput.prop('onKeyPress'),
            value: '',
            placeholder: 'MM/YY',
            readOnly: undefined,
            size: undefined
        });
    });

    it('should set the name value on change event', () => {
        dateInput.simulate('change', {
            target: { value: '12/33' } 
        });
        
        const inputAfterChange = component.find('input[name="date"]');
        expect(inputAfterChange.prop('value')).toEqual('12/33');
    });
});

describe('Check code field', () => {
    store = mockStore(initialState)
    const component = mount(
        <Provider store={store}>
            <BrowserRouter>
                <Payment />
            </BrowserRouter>
        </Provider>)

    const cvvInput = component.find('input[name="cvv"]')

    it('should have carholder field', () => {
        expect(cvvInput.length).toEqual(1);
    });

    it('should have props', () => {
        expect(cvvInput.props()).toEqual({
            'aria-label': 'CVC',
            autoComplete: 'cc-csc',
            className: 'form-control',
            id: 'cvv',
            name: 'cvv',
            type: 'text',
            onChange: cvvInput.prop('onChange'),
            onBlur: cvvInput.prop('onBlur'),
            onFocus: cvvInput.prop('onFocus'),
            onKeyDown: cvvInput.prop('onKeyDown'),
            onKeyPress: cvvInput.prop('onKeyPress'),
            value: '',
            placeholder: 'CVC',
            readOnly: undefined,
            size: undefined
        });
    });

    it('should set the name value on change event', () => {
        cvvInput.simulate('change', {
            target: { value: '321' } 
        });
        
        const inputAfterChange = component.find('input[name="cvv"]');
        expect(inputAfterChange.prop('value')).toEqual('321');
    });

    describe('Submit button', () => {
        store = mockStore(initialState);
        const component = mount(
            <Provider store={store}>
                <BrowserRouter>
                    <Payment />
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
});
