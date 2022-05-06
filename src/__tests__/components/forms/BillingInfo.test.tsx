import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { BillingInfo } from '../../../components/Index';

describe('Billing info component', () => {
    const initialState: any = {address: {
        navigatorAddress: []
    }}
    const mockStore = configureStore();
    let store;

    it('should render BillingInfo component correctly', () => {
        store = mockStore(initialState);
        const component = renderer.create(
            <Provider store={store}>
                <BrowserRouter>
                    <BillingInfo />
                </BrowserRouter>
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });

});
