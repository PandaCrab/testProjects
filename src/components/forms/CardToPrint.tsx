import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

const CardToPrint = React.forwardRef(() => {
    const saved = localStorage.getItem('billing');
    const save = JSON.parse(saved);
    const componentRef = useRef(null)
    const date = new Date();

    return (save === null ? (
        <h6>
            You don't write info: <br/>
        </h6>
        ) : (
        <section ref={componentRef}>
            <h4>Thank you for your order!</h4>
            <br/>
            <b>Order number is: {Math.floor(Math.random() * 10000000)}</b>
            <p>Your will recieve an email confirmation shortly to <a href="#/">{save.email}</a></p>
            <p>Estimated deivery Day is <br/> <b>{date.toLocaleDateString("en-EU")}</b></p>
            <ReactToPrint 
            trigger={() => <p>Print Recipe</p>}
            content={() => componentRef.current}
            documentTitle='Order' />
        </section>
    ));
});

export default CardToPrint;
