import { mount } from 'enzyme';

import Loader from '../../components/Loader';

it('should render loader', () => {
    expect(mount(<Loader />)).toMatchSnapshot();
})
