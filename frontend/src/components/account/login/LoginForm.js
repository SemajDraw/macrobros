import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import {login} from '../../../actions/auth/auth';
import './Login.scss';
import {reduceStateToObject} from "../../../utils/objectUtils";
import {LOGIN_FAIL, LOGIN_SUCCESS} from "../../../actions/auth/types";

export const LoginForm = (props) => {

    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const [validated, setValidated] = useState(false);
    const [form, setFormState] = useState({
        email: {value: '', isInvalid: false},
        password: {value: '', isInvalid: false}
    })

    useEffect(() => {
        if (isAuthenticated) {
            props.props.history.push('/');
        }
    }, [isAuthenticated]);


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
        e.preventDefault();
        login(reduceStateToObject(form, 'value'))
            .then(
                (res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data }),
                (err) => {
                    dispatch({type: LOGIN_FAIL});
                    setFormState({
                        ...form,
                        password: {value: '', isInvalid: true}
                    });
                }
            );
        setValidated(true);
    };

    return (
        <div className='register-form card card-body p-4'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                        Please provide an email
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        isInvalid={form.password.isInvalid}
                        value={form.password.value}
                        name='password'
                        onChange={handleChange}
                        required
                        type='password'
                        placeholder='Password'/>
                    <Form.Control.Feedback type='invalid'>
                        The password you have entered is incorrect!
                    </Form.Control.Feedback>
                </Form.Group>

                <Button className='btn-block mb-0 mt-4' variant='primary' type='submit'>
                    Register
                </Button>
            </Form>
        </div>
    );
}

export default LoginForm;