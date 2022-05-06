import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

import App from '../App';

describe('With React Testing Library', () => {
    const initialState = {order: {stuff: [
        {
            "id": 1,
            "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
            "name": "Check Print Shirt",
            "color": "Grey+red+black",
            "price": 110
        }]
}};
    const mockStore = configureStore();
    let store;

    it('render app component', () => {
        store = mockStore(initialState);
        const component = renderer.create(
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });
});
