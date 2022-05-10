import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CardToPrint } from '../Index';

import { Info, StyledButton } from '../../styles/FormStyle';

const SuccessBuying = () => {
    const navigate = useNavigate();

    return (
        <>
            <br/>
            <Info>
                <CardToPrint />
                <StyledButton id="back-to-start" onClick={() => {
                navigate('/shipping'); 
                localStorage.clear()
            }}>Back to shipping</StyledButton>
            </Info>
        </>
    );
};

export default SuccessBuying;
