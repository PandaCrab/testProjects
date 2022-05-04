import { shallow } from 'enzyme';
import { BillingInfo } from '../../../components/Index';

describe('Billing info component', () => {

    it('should render BillingInfo component correctly', () => {
        const component = shallow(<BillingInfo />);
        expect(component).toMatchSnapshot();
    })

})
