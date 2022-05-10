import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import { SuccessBuying } from '../../../components/Index';

it('should render correct', () => {
    const component = mount(
        <BrowserRouter>
            <SuccessBuying />
        </BrowserRouter>
    );

    expect(component).toMatchSnapshot();
});

it('should navigate on shipping info component when click', () => {
    const component = mount(
        <BrowserRouter>
            <SuccessBuying />
        </BrowserRouter>
    );

    const mockNavigate = jest.fn();
    component.find('button#back-to-start').prop('onClick')(mockNavigate());
    component.find('button#back-to-start').simulate('click');

    expect(mockNavigate).toHaveBeenCalled();
})
