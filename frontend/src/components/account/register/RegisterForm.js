import React, {useEffect, useState} from 'react';
import {register} from '../../../actions/auth/auth';
import {Redirect} from "react-router-dom";
import {Button, Form} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {reduceStateToObject} from "../../../utils/objectUtils";

export const RegisterForm = () => {

    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const [validated, setValidated] = useState(false);
    const [form, setFormState] = useState({
        firstName: {value: '', isInvalid: false},
        lastName: {value: '', isInvalid: false},
        email: {value: '', isInvalid: false},
        password: {value: '', isInvalid: false},
        password2: {value: '', isInvalid: false}
    });

    useEffect(() => {
        if (isAuthenticated) {
            return <Redirect to='/'/>;
        }
    }, []);

    const handleChange = (e) => {
        setFormState({
            ...form,
            [e.target.name]: {
                ...form[e.target.name],
                value: e.target.value,
                isInvalid: false
            }
        });
    };

    const handleSubmit = (e) => {
        const target = e.currentTarget;
        if (!form.password.value.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')) {
            preventSubmit(e);
            form.password.isInvalid = true;
        }
        if (form.password.value !== form.password2.value) {
            preventSubmit(e);
            form.password2.isInvalid = true;
        }
        if (target.checkValidity() === false) {
            preventSubmit(e);
        }

        dispatch(register(reduceStateToObject(form, 'value')));
        setValidated(true);
    };

    const preventSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <div className='register-form card card-body p-4'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId='firstName'>
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        isInvalid={form.firstName.isInvalid}
                        name='firstName'
                        onChange={handleChange}
                        required type='text'
                        placeholder='First name'/>
                    <Form.Control.Feedback type='invalid'>
                        Please provide a first name
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='lastName'>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        isInvalid={form.lastName.isInvalid}
                        name='lastName'
                        onChange={handleChange}
                        required type='text'
                        placeholder='Last name'/>
                    <Form.Control.Feedback type='invalid'>
                        Please provide a last name
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        isInvalid={form.email.isInvalid}
                        name='email'
                        onChange={handleChange}
                        required
                        type='email'
                        placeholder='Email'/>
                    <Form.Control.Feedback type='invalid'>
                        Please provide a valid email
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        isInvalid={form.password.isInvalid}
                        name='password'
                        onChange={handleChange}
                        required
                        type='password'
                        placeholder='Password'/>
                    <Form.Control.Feedback type='invalid'>
                        Please provide a valid password
                    </Form.Control.Feedback>
                    <Form.Text id="passwordHelpBlock" muted>
                        • Lets be safe use 8-20 characters
                    </Form.Text>
                    <Form.Text id="passwordHelpBlock" muted>
                        • At least 1 number, uppercase character and special character
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId='password2'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        isInvalid={form.password2.isInvalid}
                        name='password2'
                        onChange={handleChange}
                        required
                        type='password'
                        placeholder='Confirm Password'/>
                    <Form.Control.Feedback type='invalid'>
                        Your passwords do not match
                    </Form.Control.Feedback>
                </Form.Group>

                <Button className='btn-block mb-0 mt-4' variant='primary' type='submit'>
                    Register
                </Button>
            </Form>
        </div>
    );
}

export default RegisterForm;