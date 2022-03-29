import React, { useState } from 'react';
import { BsBasket3 } from 'react-icons/bs';

import { 
    OrderInfo,
    OrderInfoBtn,
    OrderCloseBtn
 } from '../Styled/OrderPlateStyles';

export const OrderPlate = () => {
    const [viewOrder, setViewOrder] = useState(false)

    return (
        <>
            <OrderInfo displayMobile={viewOrder ? 'flex' : 'none'}>
                <OrderCloseBtn onClick={() => setViewOrder(false)} />
            </OrderInfo>
            <OrderInfoBtn onClick={() => setViewOrder(!viewOrder)}>
                <BsBasket3 />
            </OrderInfoBtn>
        </>
    )
};
