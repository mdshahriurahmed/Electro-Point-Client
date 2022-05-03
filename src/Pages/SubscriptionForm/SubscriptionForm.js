import React from 'react';
import { Button, Form } from 'react-bootstrap';

const SubscriptionForm = () => {
    return (
        <div>
            <h1 className='text-white text-center'>Subscribe Us to Get Updates</h1>
            <div className='d-flex justify-content-center'>
                <Form className='w-50'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className='text-white'>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='text-white'>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <div className='d-flex justify-content-center pb-5 pt-3'>
                        <Button className='px-5 fw-bold ' variant="light" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default SubscriptionForm;