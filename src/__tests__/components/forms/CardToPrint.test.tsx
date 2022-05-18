import { mount } from 'enzyme';

import { CardToPrint } from '../../../components/Index';

const component = mount(<CardToPrint />);

it('should render card to print', () => {
    expect(component).toMatchSnapshot();
});
