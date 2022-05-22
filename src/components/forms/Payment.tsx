import React, { useState, useEffect } from 'react';
import { Form, Col, Row, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

import { paymentValidation } from '../../helpers';
import { sendData, fillPaymentData } from '../../redux/ducks/data';
import { Navigate, OrderPlate } from '../Index';

import type { AppDispatch, values } from '../../types';

import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Info,
    FormLabel,
    StyledButton,
    FormLabelHeader,
    InputCardImage,
    CardNumberInput
} from '../../styles/FormStyle';
import { Order } from '../../styles/AppStyles';

interface stateTypes {
    cardholder: string,
    cardNum: string,
    date: string,
    cvv: string
};

const Payment = () => {
    const [payment, setPayment] = useState<stateTypes>({
        cardholder: '',
        cardNum: '',
        date: '',
        cvv: ''
    });

    useEffect(() => {
        const saved = localStorage.getItem('payment');
        const save = JSON.parse(saved);

        if (save !== null) {setPayment(payment => ({
            ...payment,
            cardholder: save.cardholder,
            cardNum: save.cardNum
        }))}
        return;
    }, []);

    useEffect(() => {
        localStorage.setItem('payment', JSON.stringify(payment));
    }, [payment]);

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const {
        getCardNumberProps, 
        getCardImageProps,
        getExpiryDateProps, 
        getCVCProps
    } = usePaymentInputs();

    const formik = useFormik({
        validationSchema: paymentValidation,
        onSubmit: () => {
            dispatch(fillPaymentData(formik.values));
            dispatch(sendData());
            formik.resetForm();
            navigate('/success');
        },
        enableReinitialize: true,   
        initialValues: payment

    });

    return (
        <Order>
            <Navigate />
            <Info>
                <FormLabel>
                    <FormLabelHeader>Payment</FormLabelHeader>
                </FormLabel>
                <Form role="form" noValidate onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-4 position-relative">
                        <Form.Label className="mb-0">cardholder Name</Form.Label>
                        <Form.Control
                            id="cardholder"
                            type="text"
                            name="cardholder"
                            data-testid="cardholder"
                            onChange={(event: values) => setPayment({...payment, cardholder: event.target.value})}
                            onBlur={formik.handleBlur}
                            value={formik.values.cardholder}
                            isInvalid={ !!formik.errors.cardholder }
                            placeholder='Name as it appears on your card'
                            />                     
                        <Form.Control.Feedback type='invalid' tooltip>
                            { formik.touched.cardholder && formik.errors.cardholder }
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-4 position-relative">
                        <Form.Label className="mb-1">Card Number</Form.Label>
                        <InputGroup>
                            <CardNumberInput
                                {...getCardNumberProps({
                                    onChange: (event: values) => setPayment({...payment, cardNum: event.target.value}),
                                    onBlur: formik.handleBlur,
                                    
                                })}
                                value={formik.values.cardNum}
                                id="cardNum"
                                data-testid="cardNum"
                                type="text"
                                name="cardNum"
                                isInvalid={ !!formik.errors.cardNum }
                                placeholder="XXXX XXXX XXXX XXXX XXXX"
                            />
                            {payment.cardNum !== '' && (
                                <InputCardImage {...getCardImageProps({ images })} />
                            )}
                            <Form.Control.Feedback type='invalid' tooltip>
                                { formik.touched.cardNum && formik.errors.cardNum }
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-4 position-relative">
                        <Row>
                            <Col sm="4" xs="5">
                                <Form.Label className="mb-1">Expire Date</Form.Label>
                                    <Form.Control
                                        {...getExpiryDateProps({
                                            onChange: (event: values) => setPayment({...payment, date: event.target.value}),
                                            onBlur: formik.handleBlur

                                        })}
                                        id="date"
                                        type="text"
                                        data-testid="date"
                                        name="date"
                                        value={formik.values.date}
                                        isInvalid={ !!formik.errors.date }
                                        placeholder="MM/YY"
                                    />
                                <Form.Control.Feedback type='invalid' tooltip>
                                    { formik.touched.date && formik.errors.date }
                                </Form.Control.Feedback>
                            </Col>
                            <Col sm="5" xs="6">
                                <Form.Label className="mb-1">Security code</Form.Label>
                                <Form.Control
                                    {...getCVCProps({
                                        onChange: (event: values) => setPayment({...payment, cvv: event.target.value}),
                                        onBlur: formik.handleBlur

                                    })}
                                    id="cvv"
                                    data-testid="cvv"
                                    type="text"
                                    name="cvv"
                                    value={formik.values.cvv}
                                    isInvalid={ !!formik.errors.cvv } />
                                <Form.Control.Feedback type='invalid' tooltip>
                                    { formik.touched.cvv && formik.errors.cvv }
                                </Form.Control.Feedback>
                            </Col>
                        </Row>
                    </Form.Group>
                    <StyledButton
                        data-testid="submit-button"
                        variant="primary"
                        type="submit">
                            Pay Securely
                        </StyledButton>
                </Form>
            </Info>
            <OrderPlate />
        </Order>
    );
};

export default Payment;
