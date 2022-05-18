import React, { useState, useEffect } from 'react';
import { BsBasket3 } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import { Stuff } from '../Index';

import type { RootState } from '../../types';

import { 
    OrderInfo,
    SummaryHeaderBlock,
    SummaryHeader,
    OrderCloseBtn,
    OrderEdit,
    OrderCard,
    SummaryPrice,
    PriceInfo,
    Price,
    PriceText,
    TotalPrice,
    TotalPriceText,
    TermsConditions,
    TermsConditionText,
    TermsConditionsLink,
    OrderInfoBtn
} from '../../styles/OrderPlateStyles';

interface stateTypes {
    subtotal: number,
    shipping: number,
    taxes: number
}

const OrderPlate = () => {
    const [viewOrder, setViewOrder] = useState<boolean>(false);
    const [prices, setPrices] = useState<stateTypes>({
        subtotal: 0,
        shipping: 0,
        taxes: 12.12
    });

    const stuff = useSelector((state: RootState) => state.order.stuff);
    useEffect(() => {
        if(stuff) {
            const addPrices = stuff.reduce((accumulator: number, currentValue: any) => 
                accumulator + currentValue.price, 0);
        
            setPrices(prices => ({
                ...prices,
                subtotal: addPrices
            }));
        } else {
            setPrices(prices => ({
                ...prices,
                subtotal: 0 
            }));
        }
    }, [stuff]);

    return (
        <>
            <OrderInfo 
                data-value={viewOrder}
                id='orderInfo'
                displayMobile={viewOrder ? 'flex' : 'none'}>
                <section>
                <OrderCloseBtn id="close-btn" onClick={() => setViewOrder(false)} />
                <SummaryHeaderBlock>
                    <SummaryHeader>Order Summary</SummaryHeader> <OrderEdit>edit order</OrderEdit>
                </SummaryHeaderBlock>
                <OrderCard>
                    <Stuff />
                </OrderCard>
                <SummaryPrice>
                    <PriceInfo>
                        <PriceText>Subtotal</PriceText>
                        <PriceText>Shipping</PriceText>
                        <PriceText>Taxes</PriceText>
                    </PriceInfo>
                    <Price>
                        <PriceText>${prices.subtotal}</PriceText>
                        <PriceText>
                            {prices.shipping === 0 ? 'Free' : `$${prices.shipping}`}
                        </PriceText>
                        <PriceText>${prices.taxes}</PriceText>
                    </Price>
                </SummaryPrice>
                <TotalPrice>
                    <TotalPriceText>Total</TotalPriceText>
                    <TotalPriceText>
                        ${(prices.subtotal + prices.shipping + prices.taxes).toFixed(2)}
                    </TotalPriceText>
                </TotalPrice>
                </section>
                <section>
                <TermsConditions>
                    <TermsConditionText>All purchases are subject to our
                        <TermsConditionsLink to="/TermsAndConditions">
                            Terms and Conditions
                        </TermsConditionsLink>
                    </TermsConditionText>
                </TermsConditions>
                </section>
            </OrderInfo>            
            <OrderInfoBtn id="open-close-btn" onClick={() => setViewOrder(!viewOrder)}>
                <BsBasket3 />
            </OrderInfoBtn>
        </>
    );
};

export default OrderPlate;
