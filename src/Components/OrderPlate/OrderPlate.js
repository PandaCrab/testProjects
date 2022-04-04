import React, { useState, useEffect } from 'react';
import { BsBasket3 } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import { Stuff } from './Stuff';

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
 } from '../../Styled/OrderPlateStyles';

export const OrderPlate = () => {
    const [viewOrder, setViewOrder] = useState(false);
    const [prices, setPrices] = useState({
        subtotal: 0,
        shipping: 'Free',
        taxes: 12.12
    });

    const stuff = useSelector(state => state.order.stuff);
    useEffect(() => {
    const addPrices = stuff.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0   
    );
        setPrices({
            subtotal: addPrices,
            shipping: 'Free',
            taxes: 12.12
        });
    }, [stuff]);

    return (
        <>
            <OrderInfo displayMobile={viewOrder ? 'flex' : 'none'}>
                <section>
                <OrderCloseBtn onClick={() => setViewOrder(false)} />
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
                        <PriceText>{prices.shipping}</PriceText>
                        <PriceText>${prices.taxes}</PriceText>
                    </Price>
                </SummaryPrice>
                <TotalPrice>
                    <TotalPriceText>Total</TotalPriceText>
                    <TotalPriceText>${prices.subtotal + prices.taxes}</TotalPriceText>
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
            <OrderInfoBtn onClick={() => setViewOrder(!viewOrder)}>
                <BsBasket3 />
            </OrderInfoBtn>
        </>
    )
};

