import React, {useState} from 'react';
import {Button, Col, Form} from 'react-bootstrap';

export const ContactForm = ({formSubmit}) => {

    const [form, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        body: ''
    });
    const [validated, setValidated] = useState(false);

    const handleChange = (e) => {
        setFormState({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (event) => {
        const target = event.currentTarget;
        if (target.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        formSubmit(form);
        setValidated(true);
    };

    return (
        <div className='contact-form card card-body p-4'>
            <Form noValidate validated={validated}
                  onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId='firstName'>
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            name='firstName'
                            onChange={handleChange}
                            required type='text'
                            placeholder='First name'/>
                        <Form.Control.Feedback type='invalid'>
                            Please provide a first name
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId='lastName'>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            name='lastName'
                            onChange={handleChange}
                            required type='text'
                            placeholder='Last name'/>
                        <Form.Control.Feedback type='invalid'>
                            Please provide a last name
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name='email'
                        onChange={handleChange}
                        required
                        type='email'
                        placeholder='Enter email'/>
                    <Form.Control.Feedback type='invalid'>
                        Please provide an email
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='body'>
                    <Form.Label>Ask us anything...</Form.Label>

                    <Form.Control
                        name='body'
                        onChange={handleChange}
                        required
                        as='textarea'
                        rows='3'
                        placeholder='If you have any questions here is the place...'/>
                    <Form.Control.Feedback type='invalid'>
                        Please tell us something
                    </Form.Control.Feedback>
                </Form.Group>

                <Button className='btn-block mb-0 mt-4' variant='primary' type='submit'>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default ContactForm;