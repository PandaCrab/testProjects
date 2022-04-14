import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask/lib/react-input-mask.development';

import { paymentValidation } from '../../helpers';
import { sendData, fillPaymentData } from '../../redux/ducks/data';

import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Info,
    FormLabel,
    StyledButton,
    FormLabelHeader
 } from '../../styles/FormStyle';

const Payment = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        validationSchema: paymentValidation,
        onSubmit: () => {
            dispatch(fillPaymentData(formik.values));
            dispatch(sendData());
            formik.handleReset();
            navigate("/success");
            // setTimeout(() => localStorage.clear(), 500)
        },
        initialValues: {
            cardholder: '',
            cardNum: '',
            date: '',
            code: ''
        }
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
                        onChange={formik.handleChange}
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
                        <Form.Control
                            as={InputMask}
                            mask="9999 9999 9999 9999"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cardNum}
                            id="cardNum"
                            type="text"
                            name="cardNum"
                            isInvalid={ !!formik.errors.cardNum }
                            placeholder="XXXX XXXX XXXX XXXX"
                        />
                    <Form.Control.Feedback type='invalid' tooltip>
                        { formik.touched.cardNum && formik.errors.cardNum ?
                            formik.errors.cardNum
                            : 
                            null }
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-4 position-relative">
                    <Row>
                        <Col sm="4" xs="5">
                            <Form.Label className="mb-1">Expire Date</Form.Label>
                                <Form.Control
                                    as={InputMask}
                                    mask="99/99"
                                    id="date"
                                    type="text"
                                    name="date"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.date}
                                    isInvalid={ !!formik.errors.date }
                                    placeholder="MM/YY"
                                />
                            <Form.Control.Feedback type='invalid' tooltip>
                                { formik.touched.date && formik.errors.date ?
                                    formik.errors.date
                                    : 
                                    null }
                            </Form.Control.Feedback>
                        </Col>
                        <Col sm="5" xs="6">
                            <Form.Label className="mb-1">Security Code</Form.Label>
                            <Form.Control
                                id="code"
                                type="text"
                                name="code"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.code}
                                isInvalid={ !!formik.errors.code } />
                            <Form.Control.Feedback type='invalid' tooltip>
                                { formik.touched.code && formik.errors.code ?
                                    formik.errors.code
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
