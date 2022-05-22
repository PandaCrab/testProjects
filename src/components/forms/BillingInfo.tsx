import React, { useState, useEffect } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { billingValidation } from '../../helpers';
import { fillBillingData } from '../../redux/ducks/data';
import { takeAddress, fillAddressInput } from '../../redux/ducks/address';
import { Navigate, DropdownAddresses, CountriesSelect, OrderPlate } from '../Index';

import type { RootState, AppDispatch, values } from '../../types';

import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Info,
    StyledButton,
    FormLabel,
    FormLabelParagraph,
    FormLabelHeader,
    NavigateAutocomplete
} from '../../styles/FormStyle';
import { Order } from '../../styles/AppStyles';

interface stateTypes {
    name: string,
    email: string,
    street: string,
    optional?: string,
    city: string,
    country: string,
    zip: string
};

const BillingInfo = () => {
    const [billing, setBilling] = useState<stateTypes>({
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

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const navigatorAddress = useSelector((state: RootState) => state.address.navigatorAddress);

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

    const handleAutocomplete = (street: string, city: string, country: string) => {
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
            formik.resetForm();
            navigate('/payment');
        },
        enableReinitialize: true,
        initialValues: billing
    });

    return (
        <Order>  
            <Navigate />
            <Info>
                <FormLabel>
                    <FormLabelHeader>Billing Information</FormLabelHeader>
                    <FormLabelParagraph id='same-as-shipping' onClick={() => handleSameAsShipping()} >Same as shipping</FormLabelParagraph>
                </FormLabel>
                <Form
                    role="form"
                    noValidate
                    onSubmit={formik.handleSubmit}>
                    <Form.Group>
                        <Form.Label className="mb-0">Billing Contact</Form.Label>
                        <Form.Group className="mb-4 position-relative">
                            <Form.Control
                                id="name"
                                type="text"
                                name="name" 
                                data-testid="name-input"
                                onChange={(event: values) => setBilling({...billing, name: event.target.value})}
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
                                data-testid="email-input" 
                                onChange={(event: values) => setBilling({...billing, email: event.target.value})}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                isInvalid={ !!formik.errors.email }
                                placeholder="Email address" />
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
                                    data-testid="street-input"
                                    onChange={(event: values) => {
                                        setBilling({...billing, street: event.target.value});
                                        dispatch(takeAddress());
                                        dispatch(fillAddressInput(billing.street));
                                    }}
                                    onFocus={() => setAddressFocus(true)}
                                    onBlur={() => {
                                        setTimeout(() => setAddressFocus(false), 500);
                                    }}
                                    data-value={addressFocus}
                                    value={formik.values.street}
                                    isInvalid={ !!formik.errors.street } 
                                    placeholder="Street address" />
                                    {navigatorAddress && (
                                        <NavigateAutocomplete
                                            data-testid="autocomplete-geolocation"
                                            onClick={() => handleAutocomplete(
                                                navigatorAddress.street,
                                                navigatorAddress.city,
                                                navigatorAddress.country )} />
                                    )}
                                    { addressFocus && (
                                        <DropdownAddresses autocomplete={handleAutocomplete} />
                                    )}
                                <Form.Control.Feedback type='invalid' tooltip>
                                    { formik.touched.street && formik.errors.street }
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className='mb-2 position-relative'>
                                <Form.Control
                                    id="optional"
                                    type="text"
                                    name="optional"
                                    data-testid="optional-input" 
                                    onChange={(event: values) => setBilling({...billing, optional: event.target.value})}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.optional}
                                    placeholder="Apt, Suit, Bidg, Gate Code. (optional)" />
                            </Form.Group>
                            <Form.Group className="mb-4 position-relative">
                                <Form.Control
                                    id="city" 
                                    type="text"
                                    name="city" 
                                    data-testid="city-input"
                                    onChange={(event: values) => setBilling({...billing, city: event.target.value})}
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
                                        data-testid="country-input"
                                        onChange={(value: {label: string}) => setBilling({
                                            ...billing, 
                                            country: value.label})}
                                        onBlur={formik.handleBlur}
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
                                            data-testid="zip-input"  
                                            onChange={(event: values) => setBilling({...billing, zip: event.target.value})}
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
                        data-testid="submit-button" 
                        variant="secondary"
                        type="submit">
                        Continue
                    </StyledButton>
                </Form>
            </Info>
            <OrderPlate />
        </Order>
    );
};

export default BillingInfo;
