import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { Stuff } from '../../../components/Index';
import { mount } from 'enzyme';
import { Store, AnyAction } from 'redux';

describe('Stuff element', () => {
    const initialState = {order: {stuff: [
            {
                'id': 1,
                'imgUrl': `https://guesseu.scene7.com/is/image/GuessEU/
                    M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80
                    &op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0`,
                'name': 'Check Print Shirt',
                'color': 'Grey+red+black',
                'price': 110
            }
        ],
        loading: false
    }}
    const mockStore = configureStore();
    let store: Store<Object, AnyAction> = mockStore(initialState);

    const component = mount(
        <Provider store={store}>
            <Stuff />
        </Provider>
    );

    it('should render correct', () => {
        expect(component).toMatchSnapshot();
    });

    describe('render whithout stuff', () => {
        beforeAll(() => store = mockStore({order: {stuff: [], loading: false}}));
        afterAll(() => store = mockStore(initialState));

        it('should rendered without stuff', () => {
            expect(component).toBeTruthy();    
        });
    });

    describe('render loader', () => {
        beforeAll(() => store = mockStore({order: {stuff: [], loading: false}}));
        afterAll(() => store = mockStore(initialState));
        it('should render loader when stuff empty', () => {
            expect(component.find('LoaderContainer')).toBeTruthy();
        });
    });

    describe('render loader container when server shut down', () => {
        beforeAll(() => store = mockStore({order: {stuff: [], loading: false}}));
        afterAll(() => store = mockStore(initialState));

        it('should render loader when stuff is null', () => {
            expect(component.find('LoaderContainer')).toBeTruthy();
        });
    });
});
