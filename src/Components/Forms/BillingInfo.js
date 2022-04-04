import React, { useState } from 'react';
import {
    Form,
    Col,
    Row
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FindFormErrors } from '../../helpers';
import { personInfo } from '../data';

import { 
    Info,
    StyledButton,
    FormLabel,
    FormLabelParagraph,
    FormLabelHeader
} from '../../Styled/FormStyle';

export const BillingInfo = () => {
    const [billingInfo, setBillingInfo] = useState({});
    const [errors, setErrors] = useState({});

    const setField = (field, value) => {
        setBillingInfo({
            ...billingInfo,
            [field]: value
        });

        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        });
    };

    const handleSameShipping = () => {
        if (!personInfo.length) return null
        setBillingInfo(personInfo[0])
    }

    console.log(personInfo)
    console.log(billingInfo)

    const handleSubmit = (event) => {
        event.preventDefault()

        const newErrors = FindFormErrors(billingInfo);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        } else {
            alert('all good!')
        };
    };

    return (
        <>  
            <Info>
                <FormLabel>
                    <FormLabelHeader>Billing Information</FormLabelHeader>
                    <FormLabelParagraph onClick={()=> handleSameShipping()}>Same as shipping</FormLabelParagraph>
                </FormLabel>
                <Form fluid="true">
                    <Form.Group>
                        <Form.Label className="mb-0">Billing Contact</Form.Label>
                        <Form.Group className="mb-3 position-relative">
                            <Form.Control
                                type="name" 
                                onChange={({ target }) => setField('name', target.value)}
                                value={billingInfo.name || ''}
                                isInvalid={ !!errors.name } 
                                placeholder="Full Name" />
                            <Form.Control.Feedback type='invalid' tooltip>
                                { errors.name }
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-4 mb-md-4 mb-lg-5 mb-xl-5 position-relative">
                            <Form.Control 
                                type="text"  onChange={({ target }) => setField('email', target.value)}
                                value={billingInfo.email || ''}
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
                            <Form.Group className="mb-3 position-relative">
                                <Form.Control
                                    type="text"
                                    onChange={({ target }) => setField('address', target.value)}
                                    value={billingInfo.address || ''}
                                    isInvalid={ !!errors.address } 
                                    placeholder="Street Address" />
                                <Form.Control.Feedback type='invalid' tooltip>
                                        { errors.address }
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control 
                                    className="mb-3 position-relative"
                                    type="text" 
                                    onChange={({ target }) => setField('optionalInfo', target.value)}
                                    value={billingInfo.optionalInfo || ''}
                                    placeholder="Apt, Suit, Bidg, Gate Code. (optional)" />
                            </Form.Group>
                            <Form.Group className="mb-3 position-relative">
                                <Form.Control 
                                    type="text" 
                                    onChange={({ target }) => setField('city', target.value)}
                                    value={billingInfo.city || ''}
                                    isInvalid={ !!errors.city } 
                                    placeholder="City" />
                                <Form.Control.Feedback type='invalid' tooltip>
                                    { errors.city }
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3 position-relative">
                                <Row>
                                    <Col sm="7" xs="7">
                                        <Form.Control 
                                        as="select"
                                        onChange={({ target }) => setField('country', target.value)}
                                        value={billingInfo.country || ''}
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
                                            value={billingInfo.zip}
                                            isInvalid={ !!errors.zip || ''} 
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
