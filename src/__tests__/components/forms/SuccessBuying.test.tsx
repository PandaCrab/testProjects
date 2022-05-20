import {
    cleanup,
    fireEvent,
    render,
    screen,
    waitFor
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { SuccessBuying } from '../../../components/Index';

const setup = () => render(
    <BrowserRouter>
        <SuccessBuying />
    </BrowserRouter>
);

afterEach(cleanup);

it('should match snaphsot', () => {
    expect(setup()).toMatchSnapshot();
});

it('should goes back on click', async () => {
    setup();
    const handleClick = jest.fn();

    await fireEvent.click(screen.getByTestId('back-to-start'), handleClick());

    await waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1));
});
