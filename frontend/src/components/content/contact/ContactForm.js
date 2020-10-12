import React, {useState} from 'react';
import {Button, Col, Form} from "react-bootstrap";

export const ContactForm = ({formSubmit}) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        formSubmit({
            'firstName': firstName,
            'lastName': lastName,
            'email': email,
            'body': body,
        });
        setValidated(true);
    };

    return (
        <div className='contact-form card card-body p-4'>
            <Form noValidate validated={validated}
                  onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control onChange={(e) => setFirstName(e.target.value)}
                                      required type="text"
                                      placeholder="First name"/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a first name
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control onChange={(e) => setLastName(e.target.value)}
                                      required type="text"
                                      placeholder="Last name"/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a last name
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)}
                                  required type="email"
                                  placeholder="Enter email"/>
                    <Form.Control.Feedback type="invalid">
                        Please provide an email
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Tell us something...</Form.Label>
                    <Form.Control onChange={(e) => setBody(e.target.value)}
                                  required as="textarea" rows="3"/>
                    <Form.Control.Feedback type="invalid">
                        Please tell us something
                    </Form.Control.Feedback>
                </Form.Group>

                <Button className='btn-block mb-0 mt-4' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default ContactForm;