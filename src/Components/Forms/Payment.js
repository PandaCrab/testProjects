import React from 'react';
import {
    Form,
    Col,
    Row
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { paymentValidation } from '../../helpers';
import { sendData } from '../../Redux/modules/dataReducer';

import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Info,
    FormLabel,
    StyledButton,
    FormLabelHeader
 } from '../../Styles/FormStyle';
import { fillPaymentData } from '../../Redux/modules/dataReducer';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask/lib/react-input-mask.development';

export const Payment = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        validationSchema: paymentValidation,
        onSubmit: () => {
            dispatch(fillPaymentData(formik.values));
            dispatch(sendData());
            formik.handleReset();
            navigate("/success")
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
                        { formik.errors.cardholder }
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-4 position-relative">
                    <Form.Label className="mb-1">Card Number</Form.Label>
                    <InputMask 
                            mask="9999 9999 9999 9999"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cardNum}>
                        <Form.Control
                            id="cardNum"
                            type="text"
                            name="cardNum"
                            isInvalid={ !!formik.errors.cardNum }
                            placeholder="XXXX XXXX XXXX XXXX"
                        />
                     </InputMask>
                    <Form.Control.Feedback type='invalid' tooltip>
                        { formik.errors.cardNum }
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-4 position-relative">
                    <Row>
                        <Col sm="4" xs="5">
                            <Form.Label className="mb-1">Expire Date</Form.Label>
                            <InputMask 
                                    mask="99/99"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.date}>
                                <Form.Control
                                    id="date"
                                    type="text"
                                    name="date"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.date}
                                    isInvalid={ !!formik.errors.date }
                                    placeholder="MM/YY"
                                />
                             </InputMask>
                            <Form.Control.Feedback type='invalid' tooltip>
                                { formik.errors.date }
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
                                { formik.errors.code }
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
