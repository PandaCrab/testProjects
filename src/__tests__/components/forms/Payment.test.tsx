import {
    render,
    fireEvent,
    waitFor,
    screen,
    cleanup
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

const setup = () => render(
    <BrowserRouter>
        <Provider store={store}>
            <Payment />
        </Provider>
    </BrowserRouter>
);

afterEach(cleanup);

test('should match snapshot', () => {
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
        cardholder: '',
        cardNum: '',
        date: '',
        cvv: ''
    });
});

it('should chnage form values', async () => {
    setup();
    await fireEvent.change(screen.getByTestId('cardNum'), {
        target: { value: '5555555555555555' }
    });
    await fireEvent.change(screen.getByTestId('date'), {
        target: { value: '1233' }
    });
    await fireEvent.change(screen.getByTestId('cvv'), {
        target: { value: '321' }
    });

    expect(screen.getByRole('form')).toHaveFormValues({
        cardNum: '5555 5555 5555 5555',
        date: '12 / 33',
        cvv: '321'
    });
});

it('should change cardholder value', async () => {
    setup();

    await fireEvent.change(screen.getByTestId('cardholder'), {
        target: {value: 'Vasya Pupkin'}
    });

    expect(screen.getByTestId('cardholder')).toHaveValue('Vasya Pupkin');
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
