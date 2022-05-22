import React from 'react';
import { useNavigate } from 'react-router-dom';

import { 
    StartPage,
    NavigationButton,
    StorageButton
} from '../styles/HomePageStyles';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <StartPage>
                <h1>Hello World</h1>

                <NavigationButton onClick={() => navigate('/shipping')}>start fill Shipping information</NavigationButton>
                <StorageButton onClick={() => navigate('/storage')}>Check storage</StorageButton>
            </StartPage>
        </>
    );
};

export default HomePage;
