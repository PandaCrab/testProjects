import React, { useState } from 'react';
import {
    Form, 
    Button, 
    Col,
    Row
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { 
    Info,
    buttonStyle,
    FormLabel,
    FormLabelParagraph,
} from '../../Styled/Forms/FormStyle';

const emailRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i

export const BillingInfo = () => {
    const [billingInfo, setBillingInfo] = useState({});
    const [errors, setErrors] = useState({})

    const setField = (field, value) => {
        setBillingInfo({
            ...billingInfo,
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
            email,
            address,
            country,
            city,
            zip
        } = billingInfo;
        const newErrors = {};

        //name
        if (!name || name === '') newErrors.name = 'Please enter recipient full name';
        if (typeof name !== 'undefined') {
            if ((/^[0-9]+$/).test(name)) newErrors.name = 'Only letters';
            else if ((/^[$&+,:;=?@#|'<>.-^*()%!]+$/).test(name)) newErrors.name = `Don't use special symbols`;
            else if (!(/^[a-zA-Z]+\s[a-zA-Z]+$/).test(name)) newErrors.name = 'Please enter Full name';
        }
        //phone
        if (!email || email === '') newErrors.email = 'Please enter email';
        if (typeof email !== 'undefined') {
            if (!emailRegex.test(email)) newErrors.email = 'Please enter valid email'
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
            if (!(/^[0-9]+$/).test(zip)) newErrors.zip = 'Only numbers';
            else if (zip.length > 6) newErrors.zip = 'Invalid ZIP';
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
                    <h4>Billing Information</h4>
                    <FormLabelParagraph>Same as shipping</FormLabelParagraph>
                </FormLabel>
                <Form fluid="true">
                    <Form.Group className="mb-4 position-relative">
                        <Form.Label className="mb-0">Billing Contact</Form.Label>
                        <Form.Group className="mb-2 position-relative">
                            <Form.Control
                                type="name" 
                                onChange={({ target }) => setField('name', target.value)}
                                isInvalid={ !!errors.name } 
                                placeholder="Full Name" />
                            <Form.Control.Feedback type='invalid' tooltip>
                                { errors.name }
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control 
                                type="text"  onChange={({ target }) => setField('email', target.value)}
                                isInvalid={ !!errors.email }
                                placeholder="Email Address" />
                            <Form.Control.Feedback type='invalid' tooltip>
                                { errors.email }
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Group>
                    <Form.Group>
                        <Form.Group className="mb-4 position-relative">
                            <Form.Label className="mb-0" >Billing Address</Form.Label>
                            <Form.Group className="mb-2 position-relative">
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
                                    className="mb-4"
                                    type="text" 
                                    onChange={({ target }) => setField('optionalInfo', target.value)}
                                    placeholder="Apt, Suit, Bidg, Gate Code. (optional)" />
                            </Form.Group>
                            <Form.Group className="mb-4 position-relative">
                                <Form.Control 
                                    className="mb-4"
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
                                    <Col sm="7">
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
                                    <Col sm="5">
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
                    <Button 
                        variant="secondary"
                        type="submit" 
                        style={buttonStyle}
                        onClick={ handleSubmit }>
                        Continue
                    </Button>
                </Form>
            </Info>
        </>
    )
};