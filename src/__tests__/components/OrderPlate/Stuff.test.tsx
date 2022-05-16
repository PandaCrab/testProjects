import renderer from 'react-test-renderer'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { Stuff } from '../../../components/Index';
import { mount } from 'enzyme';

describe('Stuff element', () => {
    const initialState = {order: {stuff: [
            {
                "id": 1,
                "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
                "name": "Check Print Shirt",
                "color": "Grey+red+black",
                "price": 110
            }
        ],
        loading: false
    }}
    const mockStore = configureStore();
    let store;

    it('should render correct', () => {    
        store = mockStore(initialState);
        const component = renderer.create(
            <Provider store={store}>
                <Stuff />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });

    it('should rendered without stuff', () => {
        store = mockStore({order: {stuff: [], loading: false}});
        const component = mount(
            <Provider store={store} >
                <Stuff />
            </Provider>
        );

        expect(component).toBeDefined();
    });

    it('should render loader when stuff empty', () => {
        store = mockStore({order: {stuff: [], loading: true}});
        const component = mount(
            <Provider store={store} >
                <Stuff />
            </Provider>
        );

        expect(component.find('LoaderContainer')).toBeDefined();
    });

    it('should render loader when stuff is null', () => {
        store = mockStore({order: {stuff: null, loading: false}});
        const component = mount(
            <Provider store={store} >
                <Stuff />
            </Provider>
        );

        expect(component.find('LoaderContainer')).toBeTruthy();
    });
});
