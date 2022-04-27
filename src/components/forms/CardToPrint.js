import React from 'react';
import ReactToPrint from 'react-to-print';

const CardToPrint = React.forwardRef(( prop, ref ) => {
    const saved = localStorage.getItem('billing');
    const save = JSON.parse(saved);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date();

    return (save === null ? (
        <h6>
            You don't write info: <br/>
        </h6>
        ) : (
        <section ref={ref}>
            <h4>Thank you for your order!</h4>
            <br/>
            <b>Order number is: {Math.floor(Math.random() * 10000000)}</b>
            <p>Your will recieve an email confirmation shortly to <a href="#/">{save.email}</a></p>
            <p>Estimated deivery Day is <br/> <b>{date.toLocaleDateString("en-EU", options)}</b></p>
            <ReactToPrint 
            trigger={() => <p>Print Recipe</p>}
            content={() => ref.current}
            documentTitle='Order' />
        </section>
    ));
});

export default CardToPrint;
