import React, { useState } from 'react';
import {
    Form, 
    Button, 
    Col,
    Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const Discription = styled.p`
margin-left: 0;
    padding: 0;
    font-size: 12px;
    display: flex
    line-height: 12px;
`

const ShippingInfo = () => {
    const [shippingInfo, setShippingInfo] = useState({});
    const [errors, setErrors] = useState({});

    return (
        <>
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>Recipient</Form.Label>
                    <br />
                    <Form.Control  type='name' placeholder='Full Name' />
                    <br />
                    <Row>
                        <Col sm='7'>
                            <Form.Control type='text' placeholder='Daytime Phone' />
                        </Col>
                        <Col sm='4'>
                            <Discription>For delivery questions only</Discription>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Address</Form.Label>
                    <br />
                    <Form.Control  placeholder='Street Adress' />
                    <br />
                    <Form.Control  placeholder='Apt, Suit, Bidg, Gate Code. (optional)' />
                    <br />
                    <Form.Control  placeholder='City' />
                    <br />
                    <Row>
                        <Col sm='8'>
                            <Form.Control as='select'  >
                                <option value='' >Country</option>
                            </Form.Control>
                        </Col>
                        <Col sm='4'>
                            <Form.Control  placeholder='ZIP' />
                        </Col>
                    </Row>
                </Form.Group>
                <Button 
                    variant='primary'
                    type='submit'
                    style={{
                        color: '#fff',
                        backgroundColor: '#7a3fa8',
                        width: '10em'
                    }}>
                    Continue
                </Button>
            </Form>
        </>
    )
}

export default ShippingInfo;