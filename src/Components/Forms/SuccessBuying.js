import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

import { CardToPrint } from './CardToPrint';

import { Info } from '../../styles/FormStyle';

const SuccessBuying = () => {
    const componentRef = useRef();
    return (
        <>
            <br/>
            <Info>
                <CardToPrint ref={componentRef} />
                <ReactToPrint 
                    trigger={() => <p>Print Recipe</p>}
                    content={() => componentRef.current}
                    documentTitle='Order' />
            </Info>
        </>
    );
};

export default SuccessBuying;
