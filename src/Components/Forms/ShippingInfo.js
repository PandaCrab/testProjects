import React, { useState, useEffect } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { shippingValidation } from '../../helpers';
import { fillShippingData } from '../../redux/ducks/data';

import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Info,
    Discription,
    FormLabel,
    FormLabelHeader,
    StyledButton,
    PhoneControlInput
} from '../../styles/FormStyle';

const ShippingInfo = () => {
    const [shipping, setShipping] = useState({
        name: '',
        phone: '',
        street: '',
        optional: '',
        city: '',
        country: '',
        zip: ''
    });

    useEffect(() => {
        localStorage.setItem("shipping", JSON.stringify(shipping))
    }, [shipping])

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        validationSchema: shippingValidation,
        onSubmit: () => {
            dispatch(fillShippingData(formik.values));
            formik.handleReset();
            navigate("/billing")
            localStorage.setItem("shipping", JSON.stringify(formik.values))
        },
        initialValues: shipping
    });

    return (
        <>
            <Info>
                <FormLabel>
                    <FormLabelHeader>Shipping Information</FormLabelHeader>
                </FormLabel>
                <Form fluid="true" noValidate onSubmit={formik.handleSubmit}>
                    <Form.Group >
                        <Form.Group>
                            <Form.Label className="mb-0">Recipient</Form.Label>
                            <Form.Group className="mb-4 position-relative">
                                <Form.Control
                                id="Name"
                                type="text"
                                name="name" 
                                onChange={formik.handleChange}
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
                                <Row>
                                    <Col sm="7" xs="7">                                        
                                        <Form.Control
                                            as={PhoneControlInput}
                                            specialLabel=""
                                            id="Phone" 
                                            type="text"
                                            name="phone"  
                                            onChange={formik.handleChange('phone')}
                                            onBlur={formik.handleBlur('phone')}
                                            value={formik.values.phone}
                                            isInvalid={ !!formik.errors.phone }
                                            placeholder="Daytime Phone" />
                                        <Form.Control.Feedback type="invalid" tooltip> 
                                            { formik.touched.phone && formik.errors.phone ?
                                                formik.errors.phone
                                                : 
                                                null }
                                        </Form.Control.Feedback>
                                    </Col>
                                    <Col sm="4" xs="5">
                                        <Discription>For delivery questions only</Discription>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form.Group>    
                        <Form.Group className="mb-4 mb-md-3 mb-lg-4 mb-xl-4 position-relative">
                            <Form.Label className="mb-0" >Address</Form.Label>
                            <Form.Group className="mb-4 mb-md-3 mb-lg-4 mb-xl-4 position-relative">
                                <Form.Control
                                    id="street"
                                    type="text"
                                    name="street"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.street}
                                    isInvalid={ !!formik.errors.street } 
                                    placeholder="Street street" />
                                <Form.Control.Feedback  type='invalid' tooltip>
                                { formik.touched.street && formik.errors.street ?
                                        formik.errors.street
                                        : 
                                        null }
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-2 mb-md-3 mb-lg-4 mb-xl-4">
                                <Form.Control
                                    id="optional" 
                                    type="text"
                                    name="optional" 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.optional}
                                    placeholder="Apt, Suit, Bidg, Gate Code. (optional)" />
                            </Form.Group>
                            <Form.Group className="mb-4 mb-md-3 mb-lg-4 mb-xl-4 position-relative">
                                <Form.Control
                                    id="City"
                                    type="text"
                                    name="city" 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.city}
                                    isInvalid={ !!formik.errors.city } 
                                    placeholder="City" />
                                <Form.Control.Feedback type='invalid' tooltip>
                                { formik.touched.city && formik.errors.city ?
                                        formik.errors.city
                                        : 
                                        null }
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-2 mb-md-3 mb-lg-4 mb-xl-4">
                                <Row>
                                    <Col sm="7" xs="7">
                                        <Form.Control 
                                        id="Country"
                                        as="select"
                                        name="country"
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
                                        { formik.touched.country && formik.errors.country ?
                                            formik.errors.country
                                            : 
                                            null }
                                        </Form.Control.Feedback>
                                    </Col>
                                    <Col sm="5" xs="5">
                                        <Form.Control
                                            id="Zip"
                                            type="text"
                                            name="zip"  
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.zip}
                                            isInvalid={ !!formik.errors.zip } 
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
                        variant="primary" 
                        type="submit">
                        Continue
                    </StyledButton>
                </Form> 
            </Info>              
        </>
    );
};

export default ShippingInfo;
