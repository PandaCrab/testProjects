import React, { useState, useEffect } from 'react';
import { Form, Col, Row, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

import { paymentValidation } from '../../helpers';
import { sendData, fillPaymentData } from '../../redux/ducks/data';

import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Info,
    FormLabel,
    StyledButton,
    FormLabelHeader,
    InputCardImage,
    CardNumberInput
 } from '../../styles/FormStyle';

const Payment = () => {
    const [payment, setPayment] = useState({
        cardholder: '',
        cardNum: '',
        date: '',
        cvv: ''
    })

    useEffect(() => {
        const saved = localStorage.getItem("payment");
        const save = JSON.parse(saved);

        if (save !== null)
        setPayment({
            cardholder: save.cardholder,
            cardNum: save.cardNum
        })
        return
    }, []);

    useEffect(() => {
        localStorage.setItem("payment", JSON.stringify(payment));
    }, [payment]);

    const dispatch = useDispatch();
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
            formik.handleReset();
            navigate("/success");
            setTimeout(() => localStorage.clear(), 500)
        },
        enableReinitialize: true,   
        initialValues: payment

    });

    return (
        <Info>
            <FormLabel>
                <FormLabelHeader>Payment</FormLabelHeader>
            </FormLabel>
            <Form fluid="true" noValidate onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-4 position-relative">
                    <Form.Label className="mb-0">Cardholder Name</Form.Label>
                    <Form.Control
                        id="cardholder"
                        type="text"
                        name="cardholder"
                        onChange={(event) => setPayment({...payment, cardholder: event.target.value})}
                        onBlur={formik.handleBlur}
                        value={formik.values.cardholder}
                        isInvalid={ !!formik.errors.cardholder }
                        placeholder='Name as it appears on your card'
                        />                     
                    <Form.Control.Feedback type='invalid' tooltip>
                        { formik.touched.cardholder && formik.errors.cardholder ?
                            formik.errors.cardholder
                            : 
                            null}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-4 position-relative">
                    <Form.Label className="mb-1">Card Number</Form.Label>
                    <InputGroup>
                        <CardNumberInput
                            {...getCardNumberProps({
                                onChange: (event) => setPayment({...payment, cardNum: event.target.value}),
                                onBlur: formik.handleBlur,
                                
                            })}
                            value={formik.values.cardNum}
                            id="cardNum"
                            type="text"
                            name="cardNum"
                            isInvalid={ !!formik.errors.cardNum }
                            placeholder="XXXX XXXX XXXX XXXX"
                        />
                        <InputCardImage {...getCardImageProps({images})} />
                        <Form.Control.Feedback type='invalid' tooltip>
                            { formik.touched.cardNum && formik.errors.cardNum ?
                                formik.errors.cardNum
                                : 
                                null }
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-4 position-relative">
                    <Row>
                        <Col sm="4" xs="5">
                            <Form.Label className="mb-1">Expire Date</Form.Label>
                                <Form.Control
                                    {...getExpiryDateProps({
                                        onChange: (event) => setPayment({...payment, date: event.target.value}),
                                        onBlur: formik.handleBlur

                                    })}
                                    id="date"
                                    type="text"
                                    name="date"
                                    value={formik.values.date}
                                    isInvalid={ !!formik.errors.date }
                                    placeholder="MM/YY"
                                />
                            <Form.Control.Feedback type='invalid' tooltip>
                                { formik.touched.date && formik.errors.date ?
                                    formik.errors.date
                                    : 
                                    null 
                                }
                            </Form.Control.Feedback>
                        </Col>
                        <Col sm="5" xs="6">
                            <Form.Label className="mb-1">Security code</Form.Label>
                            <Form.Control
                                {...getCVCProps({
                                    onChange: (event) => setPayment({...payment, cvv: event.target.value}),
                                    onBlur: formik.handleBlur

                                })}
                                id="cvv"
                                type="text"
                                name="cvv"
                                value={formik.values.cvv}
                                isInvalid={ !!formik.errors.cvv } />
                            <Form.Control.Feedback type='invalid' tooltip>
                                { formik.touched.cvv && formik.errors.cvv ?
                                    formik.errors.cvv
                                    : 
                                    null }
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                </Form.Group>
                <StyledButton
                    variant="primary"
                    type="submit">
                        Pay Securely
                    </StyledButton>
            </Form>
        </Info>
        
    );
};

export default Payment;
