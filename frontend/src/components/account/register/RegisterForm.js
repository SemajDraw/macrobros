import React, { useEffect } from 'react';
import { register } from '../../../actions/auth/auth';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { REGISTER_FAIL, REGISTER_SUCCESS } from "../../../actions/auth/types";
import './Register.scss';
import * as Yup from 'yup';
import { Regex } from '../constants';
import { Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons/faInfoCircle";

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'First name must have at least 2 characters')
        .max(100, `First name can't be longer than 100 characters`)
        .required('Please provide a first name'),
    lastName: Yup.string()
        .min(2, 'Last name must have at least 2 characters')
        .max(100, `Last name can't be longer than 100 characters`)
        .required('Please provide a last name'),
    email: Yup.string()
        .email('Please enter a valid email')
        .max(100, 'Email must not be longer than 100 characters')
        .required('Please enter your email address'),
    password: Yup.string()
        .matches(Regex.PASSWORD, 'Password is not valid')
        .required('Please enter a password'),
    password2: Yup.string()
        .oneOf([Yup.ref('password')], 'Password does not match')
        .required('Please confirm your password')
});

export const RegisterForm = (props) => {

    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    useEffect(() => {
        if (isAuthenticated) {
            props.props.history.push('/');
        }
    }, [isAuthenticated]);

    return (
        <div className='register-form card card-body p-4'>
            <Formik
                initialValues={ { firstName: '', lastName: '', email: '', password: '', password2: '' } }
                validationSchema={ validationSchema }
                onSubmit={ (values, { setSubmitting, resetForm, setFieldError }) => {
                    setSubmitting(true);

                    register(values)
                        .then((res) => {
                            if (res.data.message === 'Success') {
                                resetForm();
                                setSubmitting(false);
                                dispatch({ type: REGISTER_SUCCESS, payload: res.data });
                                props.props.history.push('/register-success');
                            }
                        })
                        .catch((err) => {
                            dispatch({ type: REGISTER_FAIL });
                            setSubmitting(false);
                            if (err.response.data.hasOwnProperty('email')) {
                                setFieldError('email', 'An account with this email already exists!');
                            }
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
                        <Form.Group controlId='firstName'>
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type='text'
                                name='firstName'
                                placeholder='First name'
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                value={ values.firstName }
                                isInvalid={ touched.firstName && errors.firstName }
                            />
                            { touched.firstName && errors.firstName ? (
                                <Form.Control.Feedback type='invalid'>
                                    { <FontAwesomeIcon className='mx-1' icon={ faInfoCircle }/> }
                                    { errors.firstName }
                                </Form.Control.Feedback>
                            ) : null }
                        </Form.Group>

                        <Form.Group controlId='lastName'>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type='text'
                                name='lastName'
                                placeholder='Last name'
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                value={ values.lastName }
                                isInvalid={ touched.lastName && errors.lastName }
                            />
                            { touched.lastName && errors.lastName ? (
                                <Form.Control.Feedback type='invalid'>
                                    { <FontAwesomeIcon className='mx-1' icon={ faInfoCircle }/> }
                                    { errors.lastName }
                                </Form.Control.Feedback>
                            ) : null }
                        </Form.Group>

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
                                type='password'
                                name='password2'
                                placeholder='Confirm Password'
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                value={ values.password2 }
                                isInvalid={ touched.password2 && errors.password2 }
                            />
                            { touched.password2 && errors.password2 ? (
                                <Form.Control.Feedback type='invalid'>
                                    { <FontAwesomeIcon className='mx-1' icon={ faInfoCircle }/> }
                                    { errors.password2 }
                                </Form.Control.Feedback>
                            ) : null }
                        </Form.Group>

                        <Button className='btn-block mb-0 mt-4'
                                variant='primary'
                                disabled={ isSubmitting }
                                type='submit'>
                            Register
                        </Button>
                    </Form>
                ) }
            </Formik>
        </div>
    );
}

export default RegisterForm;