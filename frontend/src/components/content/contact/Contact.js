import React, {useState} from "react";
import {Form, Col, Button} from 'react-bootstrap';
import './Contact.scss';
import {useDispatch} from "react-redux";
import {sendEmail} from "../../../actions/contact/contact";

export const Contact = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");

    const dispatch = useDispatch();

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        dispatch(sendEmail({
            'firstName': firstName,
            'lastName': lastName,
            'email': email,
            'body': body,
        }));
        setValidated(true);
    };

    return (
        <div className='container min-vh-100'>
            <div className='row justify-content-center mt-3'>
                <Form className='contact-form' noValidate validated={validated}
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

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Contact;