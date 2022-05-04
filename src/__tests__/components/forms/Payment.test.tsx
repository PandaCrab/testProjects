import { shallow } from 'enzyme';
import { Payment } from '../../../components/Index';

describe('Payment component:', () => {

    it('should render Payment component correctly', () => {
        const component = shallow(<Payment />);
        expect(component).toMatchSnapshot();
    });

});