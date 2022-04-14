import React from 'react';
import { useNavigate } from 'react-router-dom';

export const CardToPrint = React.forwardRef(( props, ref ) => {
    const navigate = useNavigate(); 
    const saved = localStorage.getItem("billing");
    const save = JSON.parse(saved);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date();

    return (save === null ?
        (<h6>
            You don't write info: <br/>
            <button onClick={() => navigate('/shipping')}>Write info</button>
        </h6>)
        :
        (<section ref={ref}>
            <h4>Thank you for your order!</h4>
            <br/>
            <b>Order number is: {Math.floor(Math.random() * 10000000)}</b>
            <p>Your will recieve an email confirmation shortly to {save.email}</p>
            <p>Estimated deivery Day is <br/> <b>{date.toLocaleDateString("en-EU", options)}</b></p>
        </section>)
    );
});
