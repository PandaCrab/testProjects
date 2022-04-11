import React from 'react';
import { useSelector } from 'react-redux';

export const CardToPrint = React.forwardRef(( props, ref ) => {
    const email = useSelector(state => state.data.billing.email);

    return (
        <section ref={ref}>
            <h3>Thank you for your order!</h3>
            <br/>
            <p>Order number is: {Math.floor(Math.random() * 10000000)}</p>
            <br/>
            <p>Your will recievean email confirmation shortly to {email}</p>
            <br/>
            <p>Estimated deivery Day is tomorrow</p>
        </section>
    );
});
