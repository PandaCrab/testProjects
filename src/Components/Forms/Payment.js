import React, { useState } from 'react';
import {
    Form,
    Col,
    Row,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { 
    Info,
    FormLabel,
    StyledButton,
    FormLabelHeader
 } from '../../Styled/Forms/FormStyle';

export const Payment = () => {
    const [payment, setPayment] = useState({});
    const [errors, setErrors] = useState({});

    const setField = (field, value) => {
        setPayment({
            ...payment,
            [field]: value
        })

        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
    };

    const FindFormErrors = () => {
        const {
            cardholder,
            cardNum,
            date,
            code
        } = payment;
        const newErrors = {};
        //cardholder
        if (!cardholder || cardholder === '') newErrors.cardholder = 'Please enter cardholder name';
        if (typeof cardholder !== 'undefined') {
            if ((/^[0-9]+$/).test(cardholder)) newErrors.cardholder = 'Only letters';
            else if ((/^[$&+,:;=?@#|'<>.-^*()%!]+$/).test(cardholder)) newErrors.cardholder = `Don't use special symbols`;
        }
        //card number
        if (!cardNum || cardNum === '') newErrors.cardNum = 'Please enter card number';
        if (typeof cardNum !== 'undefined') {
            if ((/^[$&+,:;=?@#|'<>.-^*()%!]+$/).test(cardholder)) newErrors.cardholder = `Don't use special symbols`;
            else if (!(/^([0-9]){4} ([0-9]){4} ([0-9]){4} ([0-9]){4}$/).test(cardNum)) newErrors.cardNum = 'Enter valid card number';
        }
        //date
        if (!date || date === '') newErrors.date = 'Set date';
        if (typeof date !== 'undefined') {
            if (!(/^[\d]{2}\/[\d]{2}$/).test(date)) newErrors.date = 'Invalid date';
            else if ((/(0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[01])/).test(date)) newErrors.date = 'Invalid date';
        }
        //security code
        if (!code || code === '') newErrors.code = 'Enter code';
        if (typeof code !== 'undefined') {
            if (!(/^[0-9]+$/).test(code)) newErrors.code = 'Only numbers';
            else if ((/^[$&+,:;=?@#|'<>.-^*()%!]+$/).test(code)) newErrors.code = 'Only numbers';
            else if (code.length > 3) newErrors.code = 'To long';
        }

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = FindFormErrors();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        } else {
            alert('all good!')
        }
    };

    return (
        <Info>
            <FormLabel>
                <FormLabelHeader>Payment</FormLabelHeader>
            </FormLabel>
            <Form>
                <Form.Group className=" position-relative">
                    <Form.Label className="mb-0">Cardholder Name</Form.Label>
                    <Form.Control
                        type="name"
                        onChange={({ target }) => setField('cardholder', target.value) }
                        isInvalid={ !!errors.cardholder }
                        placeholder='Name as it appears on your card'
                     />
                    <Form.Control.Feedback type='invalid' tooltip>
                        { errors.cardholder }
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className=" position-relative">
                    <Form.Label className="mb-1">Card Number</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={({ target }) => setField('cardNum', target.value) }
                        isInvalid={ !!errors.cardNum }
                        placeholder="XXXX XXXX XXXX XXXX"
                     />
                    <Form.Control.Feedback type='invalid' tooltip>
                        { errors.cardNum }
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className=" position-relative">
                    <Row>
                        <Col sm="4" xs="4">
                            <Form.Label className="mb-1">Expire Date</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={({ target }) => setField('date', target.value) }
                                isInvalid={ !!errors.date }
                                placeholder="MM/YY"
                             />
                            <Form.Control.Feedback type='invalid' tooltip>
                                { errors.date }
                            </Form.Control.Feedback>
                        </Col>
                        <Col sm="5" xs="5">
                            <Form.Label className="mb-1">Security Code</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={({ target }) => setField('code', target.value) }
                                isInvalid={ !!errors.code } />
                            <Form.Control.Feedback type='invalid' tooltip>
                                { errors.code }
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                </Form.Group>
                <StyledButton 
                    variant="primary"
                    type="submit"
                    onClick={ handleSubmit }>
                        Pay Securely
                    </StyledButton>
            </Form>
        </Info>
        
    )
};