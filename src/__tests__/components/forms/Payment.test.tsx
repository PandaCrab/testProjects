import {
    render,
    fireEvent,
    waitFor,
    screen,
    act
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { Payment } from '../../../components/Index';

const mockStore = configureStore();
const store = mockStore({address: {
    navigatorAddress: [],
    addresses: []
}})

const view = render(
    <BrowserRouter>
        <Provider store={store}>
            <Payment />
        </Provider>
    </BrowserRouter>
);

test('should match snapshot', () => {
    expect(view).toMatchSnapshot();
});