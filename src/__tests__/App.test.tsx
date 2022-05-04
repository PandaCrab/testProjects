import { shallow } from 'enzyme'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from '../App';

describe('With React Testing Library', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    it('render app component', () => {
        store = mockStore(initialState);
        const component = shallow(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });
});
