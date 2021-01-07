import React, { useEffect } from 'react';
import { register } from '../../../actions/account/account';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { REGISTER_FAIL, REGISTER_SUCCESS } from '../../../actions/auth/types';
import './Register.scss';
import * as Yup from 'yup';
import { Regex } from '../constants';
import { Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { Link } from 'react-router-dom';
import { Common, TermsConditions } from '../../common/Routes';

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
	isSubscribed: Yup.bool().required(),
	password: Yup.string()
		.matches(Regex.PASSWORD, 'Password is not valid')
		.required('Please enter a password'),
	password2: Yup.string()
		.oneOf([Yup.ref('password')], 'Password does not match')
		.required('Please confirm your password')
});

export const RegisterForm = (props) => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	useEffect(() => {
		if (isAuthenticated) {
			props.props.history.push('/');
		}
	}, [isAuthenticated]);

	return (
		<div className='register-form card card-body p-4'>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					isSubscribed: true,
					password: '',
					password2: ''
				}}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting, resetForm, setFieldError }) => {
					setSubmitting(true);

					register(values)
						.then((res) => {
							resetForm();
							setSubmitting(false);
							dispatch({ type: REGISTER_SUCCESS, payload: res.data });
							props.props.history.push(Common.FORM_SUBMIT, {
								header: res.data.internal[0],
								body: res.data.internal[1]
							});
						})
						.catch((err) => {
							dispatch({ type: REGISTER_FAIL });
							setSubmitting(false);
							if (err.response.data.hasOwnProperty('internal')) {
								props.props.history.push(Common.FORM_SUBMIT, {
									header: err.response.data.internal[0],
									body: err.response.data.internal[1]
								});
							}
							if (err.response.data.hasOwnProperty('email')) {
								setFieldError('email', 'An account with this email already exists!');
							}
						});
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting
				}) => (
					<Form noValidate onSubmit={handleSubmit}>
						<Form.Group controlId='firstName'>
							<Form.Label>First name</Form.Label>
							<Form.Control
								type='text'
								name='firstName'
								placeholder='First name'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.firstName}
								isInvalid={touched.firstName && errors.firstName}
							/>
							{touched.firstName && errors.firstName ? (
								<Form.Control.Feedback type='invalid'>
									{<FontAwesomeIcon className='mx-1' icon={faInfoCircle} />}
									{errors.firstName}
								</Form.Control.Feedback>
							) : null}
						</Form.Group>

						<Form.Group controlId='lastName'>
							<Form.Label>Last name</Form.Label>
							<Form.Control
								type='text'
								name='lastName'
								placeholder='Last name'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.lastName}
								isInvalid={touched.lastName && errors.lastName}
							/>
							{touched.lastName && errors.lastName ? (
								<Form.Control.Feedback type='invalid'>
									{<FontAwesomeIcon className='mx-1' icon={faInfoCircle} />}
									{errors.lastName}
								</Form.Control.Feedback>
							) : null}
						</Form.Group>

						<Form.Group controlId='email'>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type='email'
								name='email'
								placeholder='Email'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								isInvalid={touched.email && errors.email}
							/>
							{touched.email && errors.email ? (
								<Form.Control.Feedback type='invalid'>
									{<FontAwesomeIcon className='mx-1' icon={faInfoCircle} />}
									{errors.email}
								</Form.Control.Feedback>
							) : null}
						</Form.Group>

						<Form.Group controlId='isSubscribed'>
							<Form.Label>Subscribe to our newsletter</Form.Label>
							<Form.Check
								className='text-muted'
								muted
								name='isSubscribed'
								label='Send me the latest news from MacroBros'
								checked={values.isSubscribed}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.isSubscribed}
								isInvalid={touched.isSubscribed && errors.isSubscribed}
							/>
						</Form.Group>

						<Form.Group controlId='password'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								name='password'
								placeholder='Password'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
								isInvalid={touched.password && errors.password}
							/>
							{touched.password && errors.password ? (
								<Form.Control.Feedback type='invalid'>
									{<FontAwesomeIcon className='mx-1' icon={faInfoCircle} />}
									{errors.password}
								</Form.Control.Feedback>
							) : null}
							<Form.Text id='passwordHelpBlock' muted>
								• Lets be safe use 8-20 characters
							</Form.Text>
							<Form.Text id='passwordHelpBlock' muted>
								• At least 1 number, uppercase character and special character
							</Form.Text>
						</Form.Group>

						<Form.Group controlId='password2'>
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type='password'
								name='password2'
								placeholder='Confirm Password'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password2}
								isInvalid={touched.password2 && errors.password2}
							/>
							{touched.password2 && errors.password2 ? (
								<Form.Control.Feedback type='invalid'>
									{<FontAwesomeIcon className='mx-1' icon={faInfoCircle} />}
									{errors.password2}
								</Form.Control.Feedback>
							) : null}
						</Form.Group>

						<Button
							className='btn-block mb-3 mt-4'
							variant='primary'
							disabled={isSubmitting}
							type='submit'
						>
							{isSubmitting ? (
								<Spinner
									as='span'
									animation='border'
									role='status'
									aria-hidden='true'
								/>
							) : (
								'REGISTER'
							)}
						</Button>
						<Form.Text id='conditions' muted>
							{
								<div>
									By creating an account, you agree to the
									<Link to={TermsConditions.TERMS_SERVICE}> Terms of Service. </Link>
									For more information about MacroBros privacy practices, see the
									<Link to={TermsConditions.PRIVACY_POLICY}>
										{' '}
										MacroBros Privacy Statement.{' '}
									</Link>
									{"We'll"} occasionally send you account-related emails.
								</div>
							}
						</Form.Text>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default RegisterForm;
