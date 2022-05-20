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

const setup = () => render(
    <BrowserRouter>
        <Provider store={store}>
            <ShippingInfo />
        </Provider>
    </BrowserRouter>
);

afterEach(cleanup)

it('should match snapshot', () => {
    expect(setup()).toMatchSnapshot();
});

it('should have form', async () => {
    setup();
    const form = screen.getByRole('form');

    expect(form).toBeInTheDocument();
})

it('should have form values', () => {
    setup();

    expect(screen.getByRole('form')).toHaveFormValues({
        name: '',
        street: '',
        optional: '',
        city: '',
        country: '',
        zip: ''
    });
});

it('should change phone input value', async () => {
    setup();

    await fireEvent.change(screen.getByPlaceholderText('Daytime Phone'), {
        target: { value: '78005553535' }
    });

    expect(screen.getByPlaceholderText('Daytime Phone')).toHaveValue('+7 (800) 555-35-35')
});

it('should chnage form values', async () => {
    setup();

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
    setup();

    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
});

it('should submit form', async () => {
    setup();
    const handleSubmit = jest.fn();
    
    await fireEvent.submit(screen.getByRole('form', handleSubmit()));
    
    await waitFor(() => 
    expect(handleSubmit).toHaveBeenCalledTimes(1)
    );
});

it('should have autocomplite geolocation button', () => {
    setup();

    expect(screen.getByTestId('autocomplete-geolocation')).toBeInTheDocument();
});

it('should autocomplete geolocation on click', async () => {
    setup();
    const handleAutocomplete = jest.fn();

    await fireEvent.click(screen.getByTestId('autocomplete-geolocation'), handleAutocomplete());

    await waitFor(() => 
        expect(handleAutocomplete).toHaveBeenCalledTimes(1)
    );
});

it('should show dropdown addresses when focus', async() => {
    setup();

    screen.getByTestId('street-input').focus();
    await fireEvent.change(screen.getByTestId('street-input'), {
        target: { value: 'un' }
    });

    await expect(screen.getByTestId('dropdown-addresses')).toBeInTheDocument();
});

it('should hide dropdown addresses when blur', async() => {
    setup();

    screen.getByTestId('street-input').focus();
    await fireEvent.change(screen.getByTestId('street-input'), {
        target: { value: 'un' }
    });

    screen.getByTestId('street-input').blur();

    setTimeout( () => expect(screen.queryByTestId('dropdown-addresses')).not.toBeInTheDocument(), 500);
});
