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
    shipping: any,
    taxes: number,
    freeShipping: boolean
}

const OrderPlate = () => {
    const [viewOrder, setViewOrder] = useState<boolean>(false);
    const [prices, setPrices] = useState<stateTypes>({
        subtotal: 0,
        shipping: 'Free',
        taxes: 12.12,
        freeShipping: false
    });

    const stuff = useSelector((state: RootState) => state.order.stuff);
    useEffect(() => {
        if(stuff.length > 1) {const addPrices = stuff.reduce((accumulator, currentValue) => 
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

    const checkFreeShipping = () => {
        if (prices.shipping === ('Free' || 'free')) {
            prices.freeShipping = true;
            return (prices.subtotal + prices.taxes).toFixed(2);
        } else {
            prices.freeShipping = false;
            return (prices.subtotal + prices.shipping + prices.taxes).toFixed(2);
        }   
    };

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
                            {prices.freeShipping ? null : '$'}
                            {prices.shipping}
                        </PriceText>
                        <PriceText>${prices.taxes}</PriceText>
                    </Price>
                </SummaryPrice>
                <TotalPrice>
                    <TotalPriceText>Total</TotalPriceText>
                    <TotalPriceText>${checkFreeShipping()}</TotalPriceText>
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
