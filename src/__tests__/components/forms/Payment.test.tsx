import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { Payment } from '../../../components/Index';

describe('Payment component:', () => {

    const initialState = {}
    const mockStore = configureStore();
    let store;
    
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
