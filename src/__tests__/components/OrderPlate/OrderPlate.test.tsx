import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import { OrderPlate } from '../../../components/Index';

const initialState: Object = {order: {stuff: [
        {
            'id': 1,
            'imgUrl': `https://guesseu.scene7.com/is/image/GuessEU/
                M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80
                &op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0`,
            'name': 'Check Print Shirt',
            'color': 'Grey+red+black',
            'price': 110
        }
    ]
}}
const mockStore = configureStore();
let store = mockStore(initialState);

const component = mount(
    <Provider store={store}>
        <BrowserRouter>
            <OrderPlate />
        </BrowserRouter>
    </Provider>
);

describe ('<OrderPlate />', () => {
    it('should render correctly order plate component', () => {
        expect(component).toMatchSnapshot();
    });

    describe('render without stuff',() => {
        beforeAll(() => store = mockStore({order: {stuff: [], loader: false}}));
        afterAll(() => store = mockStore(initialState));

        it('should rendered without stuff', () => {
            expect(component).toBeDefined();
        });
    });
});

describe('Open and close buttons', () => {
    it('should display on mobiles, when click open-close button', () => {
        component.find('button#open-close-btn').simulate('click');
        expect(component.find('section#orderInfo').prop('data-value')).toEqual(true);
    });

    it('should hide order on mobiles, when click open-close button', () => {
        component.find('button#open-close-btn').simulate('click');
        expect(component.find('section#orderInfo').prop('data-value')).toEqual(false);
    });

    it('should hide order on mobiles, when click close button', () => {
        component.find('button#open-close-btn').simulate('click');

        component.find('svg#close-btn').simulate('click');
        expect(component.find('section#orderInfo').prop('data-value')).toEqual(false);
    });
});
