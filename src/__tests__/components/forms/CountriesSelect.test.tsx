import { shallow } from 'enzyme';

import {CountriesSelect} from '../../../components/Index';

const CountriesComponent = (props: any) => (
    <CountriesSelect
        {...props}
    />);

describe('Countrie select component', () => {

    it('should rendered correctly select component', () => {
        const component = shallow(<CountriesComponent />);

        expect(component).toMatchSnapshot();
    });

    it('should rendered with empty input', () => {
        const props: any = {
            value: ''
        },
        component = shallow(<CountriesComponent {...props} />);
        
        expect((component).prop('value')).toEqual('');
    });

});
