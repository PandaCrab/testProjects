import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { CardToPrint } from '../Index';

import { Info, StyledButton } from '../../styles/FormStyle';

const SuccessBuying = () => {
    const componentRef = useRef();
    const navigate = useNavigate();

    return (
        <>
            <br/>
            <Info>
                <CardToPrint ref={componentRef} />
                <StyledButton onClick={() => {
                navigate('/shipping'); 
                localStorage.clear()
            }}>Back to shipping</StyledButton>
            </Info>
        </>
    );
};

export default SuccessBuying;
