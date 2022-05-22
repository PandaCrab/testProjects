import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CardToPrint, OrderPlate } from '../Index';

import { Info, StyledButton } from '../../styles/FormStyle';
import { Order } from '../../styles/AppStyles';

const SuccessBuying = () => {
    const navigate = useNavigate();

    return (
        <>
            <Order>
                <br/>
                <Info>
                    <CardToPrint />
                    <StyledButton
                        data-testid="back-to-start"
                        id="back-to-start"
                        onClick={() => {
                            navigate('/shipping'); 
                            localStorage.clear()
                    }}>Back to shipping</StyledButton>
                </Info>
                <OrderPlate />
            </Order>
        </>
    );
};

export default SuccessBuying;
