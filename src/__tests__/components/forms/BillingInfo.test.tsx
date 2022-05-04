import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { BillingInfo } from '../../../components/Index';

describe('Billing info component', () => {
    const initialState = {output: 10}
    const mockStore = configureStore();
    let store;

    it('should render BillingInfo component correctly', () => {
        store = mockStore(initialState);
        const component = shallow(
            <Provider store={store}>
                <BillingInfo />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });

});
