import React, { useState, useEffect } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { billingValidation } from '../../helpers';
import { fillBillingData } from '../../redux/ducks/data';

import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Info,
    StyledButton,
    FormLabel,
    FormLabelParagraph,
    FormLabelHeader
} from '../../styles/FormStyle';

const BillingInfo = () => {
    const [billing, setBilling] = useState({
        name: '',
        email: '',
        street: '',
        optional: '',
        city: '',
        country: '',
        zip: ''
    });

    useEffect(() => {
        const saved = localStorage.getItem("billing");
        const save = JSON.parse(saved);

        if (save !== null)
        setBilling({
            name: save.name,
            email: save.email,
            street: save.street,
            optional: save.optional,
            city: save.city,
            country: save.country,
            zip: save.zip
        })
        return
    }, []);

    useEffect(() => {
        localStorage.setItem("billing", JSON.stringify(billing));
    }, [billing]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSameAsShipping = () => {
        const saved = localStorage.getItem("shipping");
        const save = JSON.parse(saved);

        if (save !== null) 
        setBilling({
            name: save.name,
            email: '',
            street: save.street,
            optional: save.optional,
            city: save.city,
            country: save.country,
            zip: save.zip
        });
        return
    };

    const formik = useFormik({
        validationSchema: billingValidation,
        onSubmit: () => {
            dispatch(fillBillingData(formik.values));
            formik.handleReset();
            navigate("/payment");
        },
        enableReinitialize: true,
        initialValues: billing
    });

    return (
        <>  
            <Info>
                <FormLabel>
                    <FormLabelHeader>Billing Information</FormLabelHeader>
                    <FormLabelParagraph onClick={() => handleSameAsShipping()} >Same as shipping</FormLabelParagraph>
                </FormLabel>
                <Form fluid="true"
                    noValidate
                    onSubmit={formik.handleSubmit}>
                    <Form.Group>
                        <Form.Label className="mb-0">Billing Contact</Form.Label>
                        <Form.Group className="mb-4 position-relative">
                            <Form.Control
                                id="name"
                                type="text"
                                name="name" 
                                onChange={(event) => setBilling({...billing, name: event.target.value})}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                isInvalid={ !!formik.errors.name } 
                                placeholder="Full Name" />
                            <Form.Control.Feedback type='invalid' tooltip>
                                { formik.touched.name && formik.errors.name ?
                                    formik.errors.name
                                    : 
                                    null }
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-4 mb-md-4 mb-lg-5 mb-xl-5 position-relative">
                            <Form.Control 
                                id="email"
                                type="text"
                                name="email"  
                                onChange={(event) => setBilling({...billing, email: event.target.value})}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                isInvalid={ !!formik.errors.email }
                                placeholder="Email street" />
                            <Form.Control.Feedback type='invalid' tooltip>
                                { formik.touched.email && formik.errors.email ?
                                    formik.errors.email
                                    : 
                                    null }
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Group>
                    <Form.Group>
                        <Form.Group className="position-relative">
                            <Form.Label className="mb-0" >Billing address</Form.Label>
                            <Form.Group className="mb-4 position-relative">
                                <Form.Control
                                    id="street"
                                    type="text"
                                    name="street"
                                    onChange={(event) => setBilling({...billing, street: event.target.value})}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.street}
                                    isInvalid={ !!formik.errors.street } 
                                    placeholder="Street street" />
                                <Form.Control.Feedback type='invalid' tooltip>
                                    { formik.touched.street && formik.errors.street ?
                                        formik.errors.street
                                        : 
                                        null }
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control 
                                    className="mb-2 position-relative"
                                    id="optional"
                                    type="text"
                                    name="optional" 
                                    onChange={(event) => setBilling({...billing, optional: event.target.value})}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.optionalInfo}
                                    placeholder="Apt, Suit, Bidg, Gate Code. (optional)" />
                            </Form.Group>
                            <Form.Group className="mb-4 position-relative">
                                <Form.Control
                                    id="city" 
                                    type="text"
                                    name="city" 
                                    onChange={(event) => setBilling({...billing, city: event.target.value})}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.city}
                                    isInvalid={ !!formik.errors.city} 
                                    placeholder="City" />
                                <Form.Control.Feedback type='invalid' tooltip>
                                    { formik.touched.city && formik.errors.city ?
                                        formik.errors.city
                                        : 
                                        null }
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-4 position-relative">
                                <Row>
                                    <Col sm="7" xs="7">
                                        <Form.Control 
                                        id="country"
                                        name="country"
                                        as="select"
                                        onChange={(event) => setBilling({...billing, country: event.target.value})}
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
                                            { formik.touched.country && formik.errors.country ?
                                                formik.errors.country
                                                : 
                                                null }
                                        </Form.Control.Feedback>
                                    </Col>
                                    <Col sm="5" xs="5">
                                        <Form.Control 
                                            id="zip"
                                            type="text"
                                            name="zip"  
                                            onChange={(event) => setBilling({...billing, zip: event.target.value})}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.zip}
                                            isInvalid={ !!formik.errors.zip} 
                                            placeholder="ZIP" />
                                        <Form.Control.Feedback type='invalid' tooltip>
                                            { formik.touched.zip && formik.errors.zip ?
                                                formik.errors.zip
                                                : 
                                                null }
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
    );
};

export default BillingInfo;
