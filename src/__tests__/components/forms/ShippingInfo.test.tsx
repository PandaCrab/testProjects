import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { ShippingInfo } from '../../../components/Index';

describe('shipping info component:', () => {

    const initialState = {output: 10}
    const mockStore = configureStore();
    let store;
    
    it('should render correctly order plate component', () => {
        store = mockStore(initialState);
        const component = shallow(
            <Provider store={store}>
                <ShippingInfo />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });

});
