import React, { useState } from 'react';
import {
    Form,
    Col,
    Row
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FindFormErrors } from '../../helpers';

import { 
    Info,
    Discription,
    FormLabel,
    FormLabelHeader,
    StyledButton,
} from '../../Styled/FormStyle';

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

    const handleSubmit = (event) => {
        event.preventDefault()

        const newErrors = FindFormErrors(shippingInfo);

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
                <Form fluid="true">
                    <Form.Group >
                        <Form.Group>
                            <Form.Label className="mb-0">Recipient</Form.Label>
                            <Form.Group className="mb-3 mb-md-3 mb-lg-2 mb-xl-2 position-relative">
                                <Form.Control
                                type="name" 
                                onChange={({ target }) => setField('name', target.value)}
                                isInvalid={ !!errors.name } 
                                placeholder="Full Name" />
                                <Form.Control.Feedback type='invalid' tooltip>
                                    { errors.name }
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-4 mb-md-4 mb-lg-5 mb-xl-5 position-relative">
                                <Row>
                                    <Col sm="7" xs="7">
                                        <Form.Control   
                                            type="text"  
                                            onChange={({ target }) => setField('phone', target.value)}
                                            isInvalid={ !!errors.phone }
                                            placeholder="Daytime Phone" />
                                        <Form.Control.Feedback  type='invalid' tooltip>
                                            { errors.phone }
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
                            <Form.Group className="mb-3 mb-md-3 mb-lg-4 mb-xl-4 position-relative">
                                <Form.Control
                                    type="text"
                                    onChange={({ target }) => setField('address', target.value)}
                                    isInvalid={ !!errors.address } 
                                    placeholder="Street Address" />
                                <Form.Control.Feedback  type='invalid' tooltip>
                                        { errors.address }
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-2 mb-md-3 mb-lg-4 mb-xl-4">
                                <Form.Control 
                                    type="text" 
                                    onChange={({ target }) => setField('optionalInfo', target.value)}
                                    placeholder="Apt, Suit, Bidg, Gate Code. (optional)" />
                            </Form.Group>
                            <Form.Group className="mb-3 mb-md-3 mb-lg-4 mb-xl-4 position-relative">
                                <Form.Control 
                                    type="text" 
                                    onChange={({ target }) => setField('city', target.value)}
                                    isInvalid={ !!errors.city } 
                                    placeholder="City" />
                                <Form.Control.Feedback type='invalid' tooltip>
                                    { errors.city }
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-2 mb-md-3 mb-lg-4 mb-xl-4">
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
