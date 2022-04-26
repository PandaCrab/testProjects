import React, { useState, useEffect } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { billingValidation } from '../../helpers';
import { fillBillingData } from '../../redux/ducks/data';
import { takeAddress, fillAddressInput } from '../../redux/ducks/address';
import { Navigate, DropdownAddresses, CountriesSelect } from '../Index';

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
    const [addressFocus, setAddressFocus] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('billing');
        const save = JSON.parse(saved);

        if (save !== null) {setBilling({
            name: save.name,
            email: save.email,
            street: save.street,
            optional: save.optional,
            city: save.city,
            country: save.country,
            zip: save.zip
        })}
        return
    }, []);

    useEffect(() => {
        localStorage.setItem('billing', JSON.stringify(billing));
    }, [billing]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSameAsShipping = () => {
        const saved = localStorage.getItem('shipping');
        const save = JSON.parse(saved);

        if (save !== null) {setBilling({
            name: save.name,
            email: '',
            street: save.street,
            optional: save.optional,
            city: save.city,
            country: save.country,
            zip: save.zip
        })}
        return;
    };

    const handleAutocomplete = (street, city, country) => {
        setBilling({
            ...billing,
            street: street,
            city: city,
            country: country
        });
        setAddressFocus(false);
    };

    const formik = useFormik({
        validationSchema: billingValidation,
        onSubmit: () => {
            dispatch(fillBillingData(formik.values));
            formik.handleReset();
            navigate('/payment');
        },
        enableReinitialize: true,
        initialValues: billing
    });

    return (
        <>  
            <Navigate />
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
                                { formik.touched.name && formik.errors.name }
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
                                { formik.touched.email && formik.errors.email }
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
                                    onChange={(event) => {
                                        setBilling({...billing, street: event.target.value});
                                        dispatch(takeAddress());
                                        dispatch(fillAddressInput(billing.street));
                                    }}
                                    onFocus={() => setAddressFocus(true)}
                                    onBlur={() => {
                                        setTimeout(() => setAddressFocus(false), 500);
                                    }}
                                    value={formik.values.street}
                                    isInvalid={ !!formik.errors.street } 
                                    placeholder="Street address" />
                                    { addressFocus && (
                                        <DropdownAddresses autocomplete={handleAutocomplete} />
                                    )}
                                <Form.Control.Feedback type='invalid' tooltip>
                                    { formik.touched.street && formik.errors.street }
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
                                    { formik.touched.city && formik.errors.city }
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-4 position-relative">
                                <Row>
                                    <Col sm="7" xs="7">
                                    <CountriesSelect
                                        id="country"
                                        name="country"
                                        onChange={(value) => setBilling({
                                            ...billing, 
                                            country: value.label})}
                                        onBlur={formik.handleBlur}
                                        onInputChange={value => setBilling({
                                            ...billing,
                                            country: value
                                        })}
                                        value={formik.values.country}
                                        placeholder='Country'
                                        error={ formik.errors.country }
                                        touched={ formik.touched.country }
                                        />
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
                                            { formik.touched.zip && formik.errors.zip }
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
