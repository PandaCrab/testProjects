import React, { useState } from 'react';
import {
    Form,
    Col,
    Row,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { 
    Info,
    Discription,
    FormLabel,
    FormLabelHeader,
    StyledButton,
} from '../../Styled/Forms/FormStyle';

export const ShippingInfo = () => {
    const [shippingInfo, setShippingInfo] = useState({});
    const [errors, setErrors] = useState({});

    const setField = (field, value) => {
        setShippingInfo({
            ...shippingInfo,
            [field]: value
        })

        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
    };

    const FindFormErrors = () => {
        const {
            name,
            phone,
            address,
            country,
            city,
            zip
        } = shippingInfo;
        const newErrors = {};

        //name
        if (!name || name === '') newErrors.name = 'Please enter recipient full name';
        if (typeof name !== 'undefined') {
            if ((/^[0-9\d]+$/).test(name)) newErrors.name = 'Only letters';
            else if ((/^[$&+,:;=?@#|'<>.-^*()%!]+$/).test(name)) newErrors.name = `Don't use special symbols`;
            else if (!(/^[a-zA-Z]+\s[a-zA-Z]+$/).test(name)) newErrors.name = 'Please enter Full name';
        }
        //phone
        if (!phone || phone === '') newErrors.phone = 'Please enter phone number';
        if (typeof phone !== 'undefined') {
            if (!(/^[0-9\b]+$/).test(phone)) newErrors.phone = 'Please enter only nubmers';
            else if (phone.length !== 10) newErrors.phone = 'Please enter valid phone number';
        }
        //address
        if (!address || address === '') newErrors.address = 'Please enter address';
        //country
        if (!country || country === '') newErrors.country = 'Please choose country'
        //city
        if (!city || city === '') newErrors.city = 'Plaese enter city';
        //zip code
        if (!zip || zip === '') newErrors.zip = 'Enter ZIP';
        if (typeof zip !== 'undefined') {
            if (!(/^[0-9]+$/).test(zip)) newErrors.zip = 'Only numbers'
            else if (zip.length !== 6) newErrors.zip = 'Invalid ZIP'
        }

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = FindFormErrors();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        } else {
            alert('all good!')
        }
    };

    return (
        <>
            <Info>
                <FormLabel>
                    <FormLabelHeader>Shipping Information</FormLabelHeader>
                </FormLabel>
                <Form >
                    <Form.Group className="form-group-xxs">
                        <Form.Group >
                            <Form.Label className="mb-0">Recipient</Form.Label>
                            <Form.Group className="position-relative">
                                <Form.Control
                                type="name" 
                                onChange={({ target }) => setField('name', target.value)}
                                isInvalid={ !!errors.name } 
                                placeholder="Full Name" />
                                <Form.Control.Feedback type='invalid' tooltip>
                                    { errors.name }
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="position-relative">
                                <Row>
                                    <Col sm="7" xs="7">
                                        <Form.Control 
                                            type="text"  onChange={({ target }) => setField('phone', target.value)}
                                            isInvalid={ !!errors.phone }
                                            placeholder="Daytime Phone" />
                                        <Form.Control.Feedback type='invalid' tooltip>
                                            { errors.phone }
                                        </Form.Control.Feedback>
                                    </Col>
                                    <Col sm="4" xs="5">
                                        <Discription>For delivery questions only</Discription>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form.Group>    
                        <Form.Group className="position-relative">
                            <Form.Label className="mb-0" >Address</Form.Label>
                            <Form.Group className=" position-relative">
                                <Form.Control
                                    type="text"
                                    onChange={({ target }) => setField('address', target.value)}
                                    isInvalid={ !!errors.address } 
                                    placeholder="Street Address" />
                                <Form.Control.Feedback type='invalid' tooltip>
                                        { errors.address }
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control 
                                    type="text" 
                                    onChange={({ target }) => setField('optionalInfo', target.value)}
                                    placeholder="Apt, Suit, Bidg, Gate Code. (optional)" />
                            </Form.Group>
                            <Form.Group className="position-relative">
                                <Form.Control 
                                    type="text" 
                                    onChange={({ target }) => setField('city', target.value)}
                                    isInvalid={ !!errors.city } 
                                    placeholder="City" />
                                <Form.Control.Feedback type='invalid' tooltip>
                                    { errors.city }
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Col sm="7" xs="7">
                                        <Form.Control 
                                        as="select"
                                        onChange={({ target }) => setField('country', target.value)}
                                        isInvalid={ !!errors.country } >
                                            <option value="">Country</option>
                                            <option value="usa" >USA</option>
                                            <option value="ukraine">Ukraine</option>
                                            <option value="united kingdom">United Kingdom</option>
                                            <option value="latvia">Latvia</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type='invalid' tooltip>
                                            { errors.country }
                                        </Form.Control.Feedback>
                                    </Col>
                                    <Col sm="5" xs="5">
                                        <Form.Control
                                            type="text"  
                                            onChange={({ target }) => setField('zip', target.value)}
                                            isInvalid={ !!errors.zip } 
                                            placeholder="ZIP" />
                                        <Form.Control.Feedback type='invalid' tooltip>
                                            { errors.zip }
                                        </Form.Control.Feedback>
                                    </Col>
                                </Row>
                            </Form.Group>                        
                        </Form.Group>
                    </Form.Group>
                    <StyledButton 
                        variant="primary" 
                        type="submit"
                        onClick={ handleSubmit }>
                        Continue
                    </StyledButton>
                </Form>
            </Info>    
        </>
    )
};