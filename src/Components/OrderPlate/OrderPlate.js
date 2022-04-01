import React, { useState } from 'react';
import { BsBasket3 } from 'react-icons/bs';

import { Stuff } from './Stuff';

import { 
    OrderInfo,
    SummaryHeaderBlock,
    SummaryHeader,
    OrderCloseBtn,
    OrderEdit,
    OrderCard,
    OrderInfoBtn
 } from '../../Styled/OrderPlateStyles';

export const OrderPlate = () => {
    const [viewOrder, setViewOrder] = useState(false);

    return (
        <>
            <OrderInfo displayMobile={viewOrder ? 'flex' : 'none'}>
                <OrderCloseBtn onClick={() => setViewOrder(false)} />
                <SummaryHeaderBlock>
                    <SummaryHeader>Order Summary</SummaryHeader> <OrderEdit>edit order</OrderEdit>
                </SummaryHeaderBlock>
                <OrderCard>
                    <Stuff />
                </OrderCard>
            </OrderInfo>
            <OrderInfoBtn onClick={() => setViewOrder(!viewOrder)}>
                <BsBasket3 />
            </OrderInfoBtn>
        </>
    )
};

