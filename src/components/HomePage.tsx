import React from 'react';
import { useNavigate } from 'react-router-dom';

import { 
    StartPage,
    NavigationButton
} from '../styles/HomePageStyles';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <StartPage>
                <h1>Hello World</h1>
                <NavigationButton onClick={() => navigate('/shopping')}>Start shopping</NavigationButton>
            </StartPage>
        </>
    );
};

export default HomePage;
