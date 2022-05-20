import {
    render,
    fireEvent,
    screen,
    cleanup,
    waitFor
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

import { DropdownAddresses } from '../../../components/Index';

const mockStore = configureStore();
const store = mockStore({address: {
    addresses: [
        {
            properties: {
                id: 12234,
                name: '7a heros of Ukraine',
                locality: 'Lokvyts`a',
                country: 'Ukraine',
                label: '7a heros of Ukraine, Lokhvitsy`a, Ukraine'
            }
        },
        {
            properties: {
                id: 3552,
                name: '35 Ivana Sirka',
                locality: 'Sumy',
                country: 'Ukraine',
                label: '35 Ivana Sirka, Sumy, Ukraine'
            }
        }
    ]
}});

const props = {
    autocomplete: jest.fn()
};

const setup = () => render(
    <BrowserRouter>
        <Provider store={store}>
            <DropdownAddresses {...props} />
        </Provider>
    </BrowserRouter>
);

afterEach(cleanup)

it('should match snapshot', () => {

    expect(setup()).toMatchSnapshot();
});

it('should have items', () => {
    setup();

    expect(screen.getByTestId('12234')).toBeInTheDocument();
});

it('should fire autocomplete when click on list item', async () => {
    setup();

    await fireEvent.click(screen.getByTestId('12234'), props.autocomplete);

    await waitFor(() => expect(props.autocomplete).toHaveBeenCalledTimes(1));
});
