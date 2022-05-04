import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { OrderPlate } from '../../../components/Index';


describe ('<OrderPlate />', () => {
    const initialState = [
        {
            "id": 1,
            "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
            "name": "Check Print Shirt",
            "color": "Grey+red+black",
            "price": 110
        }
    ]
    const mockStore = configureStore();
    let store;

    it('should render correctly order plate component', () => {
        store = mockStore(initialState);
        const component = shallow(
            <Provider store={store}>
                <OrderPlate />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });

    it('should rendered without stuff', () => {
        store = mockStore([]);
        const component = shallow(
            <Provider store={store}>
                <OrderPlate />
            </Provider>
        );

        expect(component).toBeDefined();
    });

});
