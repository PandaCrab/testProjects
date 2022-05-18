import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import { DropdownAddresses } from '../../../components/Index';
import { addressPayload } from '../../../types';

const initialState: { address: addressPayload } = {address: {
    addresses: [
        {
            properties: {
                id: 12234,
                name: '7a heros of Ukraine',
                locality: 'Lokvyts`a',
                country: 'Ukraine',
                label: '7a heros of Ukraine, Lokhvitsy`a, Ukraine'
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
let store = mockStore(initialState);

const props = {
    autocomplete: jest.fn()
};

const component = mount(
    <Provider store={store}>
        <DropdownAddresses {...props} />
    </Provider>
);

describe('Dropdown addresses section render', () => {
    it('should render component correct', () => {
        expect(component).toMatchSnapshot();
    });

    it('should have items', () => {
        expect(component.find('li[key=12234]')).toBeDefined();
    });
});

describe('check activate autocomplete on click', () => {
    it('should fire autocomplete on click', () => {
        component.find('li').first().simulate('click');

        expect(props.autocomplete).toHaveBeenCalled();
    });
});
