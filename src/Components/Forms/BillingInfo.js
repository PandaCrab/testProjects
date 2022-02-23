import React, { useState } from 'react';
import {
    Form,
    Col,
    Row
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FindFormErrors } from '../../helpers';

import { 
    Info,
    StyledButton,
    FormLabel,
    FormLabelParagraph,
    FormLabelHeader
} from '../../Styled/FormStyle';

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

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = FindFormErrors(billingInfo);

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
                    <FormLabelHeader>Billing Information</FormLabelHeader>
                    <FormLabelParagraph>Same as shipping</FormLabelParagraph>
                </FormLabel>
                <Form fluid="true">
                    <Form.Group className="position-relative">
                        <Form.Label className="mb-0">Billing Contact</Form.Label>
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
                        <Form.Group className="position-relative">
                            <Form.Label className="mb-0" >Billing Address</Form.Label>
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
                                    className=""
                                    type="text" 
                                    onChange={({ target }) => setField('optionalInfo', target.value)}
                                    placeholder="Apt, Suit, Bidg, Gate Code. (optional)" />
                            </Form.Group>
                            <Form.Group className="position-relative">
                                <Form.Control 
                                    className=""
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
                        variant="secondary"
                        type="submit"
                        onClick={ handleSubmit }>
                        Continue
                    </StyledButton>
                </Form>
            </Info>
        </>
    )
};