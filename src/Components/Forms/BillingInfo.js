import React from 'react';
import {
    Form,
    Col,
    Row
} from 'react-bootstrap';
import { useFormik } from 'formik';

import { billingValidation } from '../../helpers';

import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Info,
    StyledButton,
    FormLabel,
    FormLabelParagraph,
    FormLabelHeader
} from '../../Styled/FormStyle';

export const BillingInfo = () => {

    const formik = useFormik({
        validationSchema: billingValidation,
        onSubmit: () => {
            console.log(JSON.stringify(formik.values, null, '/f'));
            formik.handleReset();
        },
        initialValues: {
            name: '',
            email: '',
            address: '',
            optional: '',
            city: '',
            country: '',
            zip: ''
        }
    });

    return (
        <>  
            <Info>
                <FormLabel>
                    <FormLabelHeader>Billing Information</FormLabelHeader>
                    <FormLabelParagraph>Same as shipping</FormLabelParagraph>
                </FormLabel>
                <Form fluid="true" noValidate onSubmit={formik.handleSubmit}>
                    <Form.Group>
                        <Form.Label className="mb-0">Billing Contact</Form.Label>
                        <Form.Group className="mb-3 position-relative">
                            <Form.Control
                                id="name"
                                type="text"
                                name="name" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                isInvalid={ !!formik.errors.name } 
                                placeholder="Full Name" />
                            <Form.Control.Feedback type='invalid' tooltip>
                                { formik.errors.name }
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-4 mb-md-4 mb-lg-5 mb-xl-5 position-relative">
                            <Form.Control 
                                id="email"
                                type="text"
                                name="email"  
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                isInvalid={ !!formik.errors.email }
                                placeholder="Email Address" />
                            <Form.Control.Feedback type='invalid' tooltip>
                                { formik.errors.email }
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Group>
                    <Form.Group>
                        <Form.Group className="position-relative">
                            <Form.Label className="mb-0" >Billing Address</Form.Label>
                            <Form.Group className="mb-3 position-relative">
                                <Form.Control
                                    id="address"
                                    type="text"
                                    name="address"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.address}
                                    isInvalid={ !!formik.errors.address } 
                                    placeholder="Street Address" />
                                <Form.Control.Feedback type='invalid' tooltip>
                                        { formik.errors.address }
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control 
                                    className="mb-3 position-relative"
                                    id="optional"
                                    type="text"
                                    name="optional" 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.optionalInfo}
                                    placeholder="Apt, Suit, Bidg, Gate Code. (optional)" />
                            </Form.Group>
                            <Form.Group className="mb-3 position-relative">
                                <Form.Control
                                    id="city" 
                                    type="text"
                                    name="city" 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.city}
                                    isInvalid={ !!formik.errors.city} 
                                    placeholder="City" />
                                <Form.Control.Feedback type='invalid' tooltip>
                                    { formik.errors.city }
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3 position-relative">
                                <Row>
                                    <Col sm="7" xs="7">
                                        <Form.Control 
                                        id="country"
                                        name="country"
                                        as="select"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.country}
                                        isInvalid={ !!formik.errors.country } >
                                            <option value="">Country</option>
                                            <option value="usa" >USA</option>
                                            <option value="ukraine">Ukraine</option>
                                            <option value="united kingdom">United Kingdom</option>
                                            <option value="latvia">Latvia</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type='invalid' tooltip>
                                            { formik.errors.country }
                                        </Form.Control.Feedback>
                                    </Col>
                                    <Col sm="5" xs="5">
                                        <Form.Control 
                                            id="zip"
                                            type="text"
                                            name="zip"  
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.zip}
                                            isInvalid={ !!formik.errors.zip} 
                                            placeholder="ZIP" />
                                        <Form.Control.Feedback type='invalid' tooltip>
                                            { formik.errors.zip }
                                        </Form.Control.Feedback>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form.Group>
                    </Form.Group>
                    <StyledButton 
                        variant="secondary"
                        type="submit">
                        Continue
                    </StyledButton>
                </Form>
            </Info>
        </>
    )
};
