import React, { useState, useEffect } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { shippingValidation } from '../../helpers';
import { fillShippingData } from '../../redux/ducks/data';
import { takeAddress, fillAddressInput } from '../../redux/ducks/address';
import { Navigate, DropdownAddresses, CountriesSelect } from '../Index';

import type { RootState, AppDispatch, values } from '../../types';

import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Info,
    Discription,
    FormLabel,
    FormLabelHeader,
    StyledButton,
    PhoneControlInput,
    NavigateAutocomplete
} from '../../styles/FormStyle';

interface stateTypes {
    name: string,
    phone: any,
    street: string,
    optional: string,
    city: string,
    country: string,
    zip: string
};

const ShippingInfo = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const navigatorAddress = useSelector((state: RootState) => state.address.navigatorAddress)
    const [addressFocus, setAddressFocus] = useState(false);
    const [shipping, setShipping] = useState<stateTypes>({
        name: '',
        phone: '',
        street: '',
        optional: '',
        city: '',
        country: '',
        zip: ''
    });

    useEffect(() => {
        const saved = localStorage.getItem('shipping');
        const save = JSON.parse(saved);

        if (save !== null) {setShipping({
            name: save.name,
            phone: save.phone,
            street: save.street,
            optional: save.optional,
            city: save.city,
            country: save.country,
            zip: save.zip
        })}
        return;
    }, []);

    useEffect(() => {
        localStorage.setItem('shipping', JSON.stringify(shipping))
    }, [shipping]);

    const formik = useFormik({
        validationSchema: shippingValidation,
        onSubmit: () => {
            dispatch(fillShippingData(formik.values));
            formik.resetForm();
            navigate('/billing');
        },
        enableReinitialize: true,
        initialValues: shipping
    });

    const handleAutocomplete = (street: string, city: string, country: string) => {
        setShipping({
            ...shipping,
            street: street,
            city: city,
            country: country
        });
        setAddressFocus(false);
    };

    return (
        <>
            <Navigate />
            <Info>
                <FormLabel>
                    <FormLabelHeader>Shipping Information</FormLabelHeader>
                </FormLabel>
                <Form noValidate onSubmit={formik.handleSubmit} role="form">
                    <Form.Group >
                        <Form.Group>
                            <Form.Label className="mb-0">Recipient</Form.Label>
                            <Form.Group className="mb-4 position-relative">
                                <Form.Control
                                id="name"
                                type="text"
                                name="name"
                                data-testid="name-input" 
                                onChange={(event: values) => setShipping({...shipping, name: event.target.value})}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                isInvalid={ !!formik.errors.name } 
                                placeholder="Full Name" />
                                <Form.Control.Feedback type="invalid" tooltip>
                                    { formik.touched.name && formik.errors.name }
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-4 mb-md-4 mb-lg-5 mb-xl-5 position-relative">
                                <Row>
                                    <Col sm="7" xs="7">                                        
                                        <Form.Control
                                            as={PhoneControlInput}
                                            specialLabel=""
                                            id="phone" 
                                            type="text"
                                            name="phone"
                                            data-testid="phone-input"
                                            onChange={(value) => setShipping({...shipping, phone: value})}
                                            onBlur={formik.handleBlur("phone")}
                                            value={formik.values.phone}
                                            isInvalid={ !!formik.errors.phone }
                                            placeholder="Daytime Phone" />
                                        <Form.Control.Feedback type="invalid" tooltip> 
                                            { formik.touched.phone && formik.errors.phone }
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
                                    data-testid="street-input"
                                    onChange={(event: values) => {
                                        setShipping({...shipping, street: event.target.value});
                                        dispatch(takeAddress());
                                        dispatch(fillAddressInput(shipping.street));
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
                                            <DropdownAddresses
                                                autocomplete={handleAutocomplete} />
                                    )}
                                <Form.Control.Feedback  type="invalid" tooltip>
                                { formik.touched.street && formik.errors.street }
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-2 mb-md-3 mb-lg-4 mb-xl-4">
                                <Form.Control
                                    id="optional" 
                                    type="text"
                                    name="optional" 
                                    data-testid="optional-input"
                                    onChange={(event: values) => setShipping({...shipping, optional: event.target.value})}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.optional}
                                    placeholder="Apt, Suit, Bidg, Gate Code. (optional)" />
                            </Form.Group>
                            <Form.Group className="mb-4 mb-md-3 mb-lg-4 mb-xl-4 position-relative">
                                <Form.Control
                                    id="city"
                                    type="text"
                                    name="city"
                                    data-testid="city-input" 
                                    onChange={(event: values) => setShipping({...shipping, city: event.target.value})}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.city}
                                    isInvalid={ !!formik.errors.city } 
                                    placeholder="City" />
                                <Form.Control.Feedback type="invalid" tooltip>
                                { formik.touched.city && formik.errors.city }
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-2 mb-md-3 mb-lg-4 mb-xl-4">
                                <Row>
                                    <Col sm="7" xs="7">
                                        <CountriesSelect
                                        id="country"
                                        name="country"
                                        onChange={(value: {label: string}) => setShipping({
                                            ...shipping, 
                                            country: value.label})}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.country}
                                        placeholder="Country"
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
                                            onChange={(event: values) => setShipping({...shipping, zip: event.target.value})}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.zip}
                                            isInvalid={ !!formik.errors.zip } 
                                            placeholder="ZIP" />
                                        <Form.Control.Feedback type="invalid" tooltip>
                                        { formik.touched.zip && formik.errors.zip }
                                        </Form.Control.Feedback>
                                    </Col>
                                </Row>
                            </Form.Group>                        
                        </Form.Group>
                    </Form.Group>
                    <StyledButton
                        id="submit"
                        variant="primary"
                        data-testid='submit-button' 
                        type="submit">
                        Continue
                    </StyledButton>
                </Form> 
            </Info>              
        </>
    );
};

export default ShippingInfo;
