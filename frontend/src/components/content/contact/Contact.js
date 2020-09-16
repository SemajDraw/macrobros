import React, {Component} from "react";
import {Form, Col, Button} from 'react-bootstrap';


export class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {validated: false};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log('event', event);
        const form = event.currentTarget;
        console.log('validity', form.checkValidity());
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        alert('form validated')
        console.log('state val', this.state);
        this.state.validated = true;
        console.log('state val', this.state);
    };

    render() {
        console.log('state render', this.state);
        return (
            <div className='container min-vh-100'>
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control required type="text" placeholder="First name"/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a first name
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control required type="text" placeholder="Last name"/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a last name
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email"/>
                        <Form.Control.Feedback type="invalid">
                            Please provide an email
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }

}

export default Contact;