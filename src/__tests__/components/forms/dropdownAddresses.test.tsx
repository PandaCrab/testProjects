import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { DropdownAddresses } from '../../../components/Index';

describe('Dropdown addresses section render', () => {
    const initialState: any = {address: {
        addresses: [
            {
                properties: {
                    id: 12234,
                    name: '7a heros of Ukraine',
                    locality: 'Lokvyts`a',
                    country: 'Ukraine',
                    label: '7a heros of Ukraine, Likhvitsy`a, Ukraine'
                }
            },
            {
                properties: {
                    id: 3552,
                    name: '35 Ivana Sirka',
                    locality: 'Sumy',
                    country: 'Ukraine',
                    label: '35 Ivana Sirka, Sumy, Ukraine'
                }
            }
        ]
    }};
    const mockStore = configureStore();
    let store;

    it('should render component correct', () => {
        store = mockStore(initialState);
        const props = {
            autocomplete: jest.fn()
        };
        const component = renderer.create(
            <Provider store={store}>
                <DropdownAddresses {...props} />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });

});