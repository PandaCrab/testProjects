import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { Payment } from '../../../components/Index';

describe('Payment component:', () => {

    const initialState = {output: 10}
    const mockStore = configureStore();
    let store;
    
    it('should render correctly order plate component', () => {
        store = mockStore(initialState);
        const component = shallow(
            <Provider store={store}>
                <Payment />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });

});
