import {
    render,
    screen,
    cleanup
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

import { OrderPlate } from '../../../components/Index';

const mockStore = configureStore();
const store = mockStore({order: {stuff: [
    {
        'id': 1,
        'imgUrl': `https://guesseu.scene7.com/is/image/GuessEU/
            M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80
            &op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0`,
        'name': 'Check Print Shirt',
        'color': 'Grey+red+black',
        'price': 110
    }
]
}})

const setup = () => render(
    <BrowserRouter>
        <Provider store={store}>
            <OrderPlate />
        </Provider>
    </BrowserRouter>
);

afterEach(cleanup);

it('should match snapshot', () => {
    expect(setup()).toMatchSnapshot();
});

it('should render loader, when stuff empty', () => {
    const emptyStore = mockStore({order: {  stuff: [], loading: true}});
    render(
        <BrowserRouter>
        <Provider store={emptyStore}>
            <OrderPlate />
        </Provider>
    </BrowserRouter>
    );

    expect(screen.getByTestId('loading')).toBeInTheDocument();
});
