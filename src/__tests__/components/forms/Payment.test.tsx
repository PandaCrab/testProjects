import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AnyAction, Store } from 'redux';
import configureStore from 'redux-mock-store';

import { Payment } from '../../../components/Index';

const initialState: Object = {};
const mockStore = configureStore();
let store: Store<Object, AnyAction> = mockStore(initialState);

const component = mount(
    <Provider store={store}>
        <BrowserRouter>
            <Payment />
        </BrowserRouter>
    </Provider>
);

describe('Payment component:', () => {
    it('should render correctly Order plate component', () => {
        expect(component).toMatchSnapshot();
    });
});

describe('Check cardholder field in Payment component', () => {
    const cardholderInput = component.find('input[name="cardholder"]');

    it('should have carholder field', () => {
        expect(cardholderInput.length).toEqual(1);
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
    const cardNumInput = component.find('input[name="cardNum"]');

    it('should have carholder field', () => {
        expect(cardNumInput.length).toEqual(1);
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
    const dateInput = component.find('input[name="date"]');

    it('should have carholder field', () => {
        expect(dateInput.length).toEqual(1);
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
    const cvvInput = component.find('input[name="cvv"]');

    it('should have carholder field', () => {
        expect(cvvInput.length).toEqual(1);
    });

    it('should set the name value on change event', () => {
        cvvInput.simulate('change', {
            target: { value: '321' } 
        });
        
        const inputAfterChange = component.find('input[name="cvv"]');
        expect(inputAfterChange.prop('value')).toEqual('321');
    });
});

describe('Submit button', () => {
    it('should have submit button', () => {
        expect(component.find('button[type="submit"]').length).toEqual(1);
    });

    it('should submit on click', () => {
        const mockHandleSubmit = jest.fn();

        component.find('form').simulate('submit', mockHandleSubmit());

        expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    });
});
