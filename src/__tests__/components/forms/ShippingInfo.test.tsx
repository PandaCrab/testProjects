import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { ShippingInfo } from '../../../components/Index';

describe('shipping info component:', () => {
    const initialState: any = {address: {
        navigatorAddress: []
    }};
    const mockStore = configureStore();
    let store;
    
    it('should render correctly Shipping info component', () => {
        store = mockStore(initialState);
        const component = renderer.create(
            <Provider store={store}>
                <BrowserRouter>
                    <ShippingInfo />
                </BrowserRouter>
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });

});
