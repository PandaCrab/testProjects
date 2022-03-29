import React, { useState } from 'react';
import {
    Form,
    Col,
    Row
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FindFormErrors } from '../../helpers';

import { 
    Info,
    FormLabel,
    StyledButton,
    FormLabelHeader
 } from '../../Styled/FormStyle';

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

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = FindFormErrors(payment);

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
                <Form.Group className="mb-4 position-relative">
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
                <Form.Group className="mb-4 position-relative">
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
                <Form.Group className="mb-4 position-relative">
                    <Row>
                        <Col sm="4" xs="5">
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
                        <Col sm="5" xs="6">
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
