import { shallow } from 'enzyme';
import { ShippingInfo } from '../../../components/Index';

describe('shipping info component:', () => {

    it('should render correctly ShippingInfo component', () => {
        const shippingInfo = shallow(<ShippingInfo />);
        expect(shippingInfo).toMatchSnapshot();
    });

});