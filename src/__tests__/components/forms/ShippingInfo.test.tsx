import * as React from 'react';
import {
    render,
    fireEvent,
    screen,
    cleanup,
    waitFor
} from '@testing-library/react';
import selectEvent from 'react-select-event'
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

import { ShippingInfo } from '../../../components/Index';

const mockStore = configureStore();
const store = mockStore({address: {
    navigatorAddress: [],
    addresses: []
}});

afterEach(cleanup)

it('should match snapshot', () => {
    const { container } = render(
        <BrowserRouter>
            <Provider store={store}>
                <ShippingInfo />
            </Provider>
        </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
});

it('should have form', async () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <ShippingInfo />
            </Provider>
        </BrowserRouter>
    );
    const form = screen.getByRole('form');

    expect(form).toBeInTheDocument();
})

it('should have values', () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <ShippingInfo />
            </Provider>
        </BrowserRouter>
    );

    expect(screen.getByRole('form')).toHaveFormValues({
        name: '',
        street: '',
        optional: '',
        city: '',
        country: '',
        zip: ''
    });
});

it('should chnage values', async () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <ShippingInfo />
            </Provider>
        </BrowserRouter>
    );

    await fireEvent.change(screen.getByTestId('name-input'), {
        target: {value: 'Vasya Pupkin'}
    });
    await fireEvent.change(screen.getByTestId('street-input'), {
        target: { value: 'kolotushkina 7a' }
    });
    await fireEvent.change(screen.getByTestId('optional-input'), {
        target: { value: 'door code: 332' }
    });
    await fireEvent.change(screen.getByTestId('city-input'), {
        target: { value: 'zapolyar`e' }
    });
    await selectEvent.select(screen.getByRole('combobox'), 'United States');
    await fireEvent.change(screen.getByTestId('zip-input'), {
        target: { value: '332124' }
    });

    expect(screen.getByRole('form')).toHaveFormValues({
        name: 'Vasya Pupkin',
        street: 'kolotushkina 7a',
        optional: 'door code: 332',
        city: 'zapolyar`e',
        country: 'US',
        zip: '332124'
    });
});

it('should have submit button', () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <ShippingInfo />
            </Provider>
        </BrowserRouter>
    );

    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
});

it('should submit form', async () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <ShippingInfo />
            </Provider>
        </BrowserRouter>
    );
    const handleSubmit = jest.fn();



    await fireEvent.submit(screen.getByRole('form', handleSubmit()));

    await waitFor(() => 
        expect(handleSubmit).toHaveBeenCalledTimes(1)
    );
});
