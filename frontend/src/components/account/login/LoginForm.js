import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { login } from '../../../actions/auth/auth';
import './Login.scss';
import { LOGIN_FAIL, LOGIN_SUCCESS } from "../../../actions/auth/types";
import * as Yup from "yup";
import { Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons/faInfoCircle";

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('Please enter an email'),
    password: Yup.string()
        .required('Please enter a password')
});

export const LoginForm = (props) => {

    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    useEffect(() => {
        if (isAuthenticated) {
            props.props.history.push('/');
        }
    }, [isAuthenticated]);

    return (
        <div className='login-form card card-body p-4'>
            <Formik
                initialValues={ { email: '', password: '' } }
                validationSchema={ validationSchema }
                onSubmit={ (values, { setSubmitting, resetForm, setFieldError, setFieldValue }) => {
                    setSubmitting(true);

                    login(values)
                        .then((res) => {
                            resetForm();
                            setSubmitting(false);
                            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
                        })
                        .catch((err) => {
                            setSubmitting(false);
                            dispatch({ type: LOGIN_FAIL });
                            const field = Object.keys(err.response.data)[0];
                            setFieldError(field, err.response.data[field]);
                        });
                } }
            >
                { ({
                       values,
                       errors,
                       touched,
                       handleChange,
                       handleBlur,
                       handleSubmit,
                       isSubmitting
                   }) => (
                    <Form noValidate onSubmit={ handleSubmit }>
                        <Form.Group controlId='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                name='email'
                                placeholder='Email'
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                value={ values.email }
                                isInvalid={ touched.email && errors.email }
                            />
                            { touched.email && errors.email ? (
                                <Form.Control.Feedback type='invalid'>
                                    { <FontAwesomeIcon className='mx-1' icon={ faInfoCircle }/> }
                                    { errors.email }
                                </Form.Control.Feedback>
                            ) : null }
                        </Form.Group>

                        <Form.Group controlId='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                name='password'
                                placeholder='Password'
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                value={ values.password }
                                isInvalid={ touched.password && errors.password }
                            />
                            { touched.password && errors.password ? (
                                <Form.Control.Feedback type='invalid'>
                                    { <FontAwesomeIcon className='mx-1' icon={ faInfoCircle }/> }
                                    { errors.password }
                                </Form.Control.Feedback>
                            ) : null }
                        </Form.Group>

                        <Button
                            className='btn-block mb-0 mt-4'
                            variant='primary'
                            disabled={ isSubmitting }
                            type='submit'>
                            Login
                        </Button>
                    </Form>
                ) }
            </Formik>
        </div>
    );
}

export default LoginForm;