import {
    cleanup,
    fireEvent,
    render,
    screen
} from '@testing-library/react';
import '@testing-library/jest-dom';

import { CardToPrint } from '../../../components/Index';

const setup = () => render(
        <CardToPrint />
);

afterEach(cleanup)

it('should match snapshot', () => {
    const billing = {
        name: 'Vasya',
        email: 'test@mail.com'
    };

    window.localStorage.setItem('billing', JSON.stringify(billing));

    expect(setup()).toMatchSnapshot();

    window.localStorage.clear();
});

it('should don`t have print indo, and take return massage', () => {
    setup();

    expect(screen.getByText(`You don't write info:`)).toBeInTheDocument();
});

it('should print when click', async () => {
    const handlePrint = jest.fn();
    
    const billing = {
        name: 'Vasya',
        email: 'test@mail.com'
    };
    
    window.localStorage.setItem('billing', JSON.stringify(billing));
    await setup();

    await fireEvent.click(screen.getByText(/Print Recipe/i), handlePrint());

    expect(handlePrint).toHaveBeenCalledTimes(1);

    window.localStorage.clear();
});
