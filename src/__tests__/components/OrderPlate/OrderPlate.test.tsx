import { shallow } from 'enzyme';
import { OrderPlate } from '../../../components/Index';


describe ('<OrderPlate />', () => {
    
    const component = shallow(<OrderPlate />);
    it('should render correctly order plate component', () => {
        expect(component).toMatchSnapshot();
    });

})