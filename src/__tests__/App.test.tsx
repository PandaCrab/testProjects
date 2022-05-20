import {
    cleanup,
    render
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from '../App';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureStore();
const store = mockStore({order: {
    stuff: [
        {
            'id': 1,
            'imgUrl': `https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0
                -L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,
                1.0,5,0&iccEmbed=0`,
            'name': 'Check Print Shirt',
            'color': 'Grey+red+black',
            'price': 110
        }
    ],
    loading: false
}})

test('should have snapshot', () => {
    const view = render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    );

    expect(view).toMatchSnapshot();

    cleanup();
});
