import { mount } from 'enzyme';

import { CardToPrint } from '../../../components/Index';

it('should render card to print', () => {
    const component = mount(<CardToPrint />);
    expect(component).toMatchSnapshot();
});
