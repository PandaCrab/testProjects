import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { OrderPlate } from '../../../components/Index';

const initialState = {order: {stuff: [
        {
            "id": 1,
            "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
            "name": "Check Print Shirt",
            "color": "Grey+red+black",
            "price": 110
        }
    ]
}}
const mockStore = configureStore();
let store: any;

describe ('<OrderPlate />', () => {

    it('should render correctly order plate component', () => {
        store = mockStore(initialState);
        const component = renderer.create(
            <Provider store={store}>
                <BrowserRouter>
                    <OrderPlate />
                </BrowserRouter>
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });

    it('should rendered without stuff', () => {
        store = mockStore({order: {stuff: [], loader: false}});
        const component = mount(
            <BrowserRouter>
                <Provider store={store}>
                    <OrderPlate />
                </Provider>
            </BrowserRouter>
        );

        expect(component).toBeDefined();
    });

});

describe('Open and close buttons', () => {
    store = mockStore(initialState);
    const component = mount(
        <Provider store={store}>
            <BrowserRouter>
                <OrderPlate />
            </BrowserRouter>
        </Provider>);


    it('should display or hide order on mobiles, when click', () => {
        component.find('button#open-close-btn').simulate('click');
        expect(component.find('section#orderInfo').prop('data-value')).toEqual(true);

        component.find('button#open-close-btn').simulate('click');
        expect(component.find('section#orderInfo').prop('data-value')).toEqual(false);
    });

    it('should hide order on mobiles, when click', () => {
        component.find('button#open-close-btn').simulate('click');
        expect(component.find('section#orderInfo').prop('data-value')).toEqual(true);

        component.find('svg#close-btn').simulate('click');
        expect(component.find('section#orderInfo').prop('data-value')).toEqual(false);
    });

});

