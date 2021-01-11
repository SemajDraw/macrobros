import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Regex } from '../constants';
import { passwordReset } from '../../../actions/account/account';
import { Common } from '../../shared/Routes';
import { Button, Form, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { useDispatch } from 'react-redux';
import { PASSWORD_RESET } from '../../../actions/account/types';

const validationSchema = Yup.object().shape({
	password: Yup.string()
		.matches(Regex.PASSWORD, 'Password is not valid')
		.required('Please enter a password'),
	password1: Yup.string()
		.oneOf([Yup.ref('password')], 'Password does not match')
		.required('Please confirm your password')
});

export const PasswordResetForm = (props) => {
	const dispatch = useDispatch();
	return (
		<div className='forgot-password-form card card-body p-4'>
			<Formik
				initialValues={{ password: '', password1: '' }}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					setSubmitting(true);

					passwordReset(
						props.queryParams.user,
						props.queryParams.token,
						values.password,
						values.password1
					)
						.then((res) => {
							resetForm();
							setSubmitting(false);
							dispatch({ type: PASSWORD_RESET, payload: res.data });
							props.props.history.push(Common.FORM_SUBMIT, {
								header: res.data.internal[0],
								body: res.data.internal[1]
							});
						})
						.catch((err) => {
							setSubmitting(false);
							props.props.history.push(Common.FORM_SUBMIT, {
								header: err.response.data.internal[0],
								body: err.response.data.internal[1]
							});
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

						<Form.Group controlId='password1'>
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type='password'
								name='password1'
								placeholder='Confirm Password'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password1}
								isInvalid={touched.password1 && errors.password1}
							/>
							{touched.password1 && errors.password1 ? (
								<Form.Control.Feedback type='invalid'>
									{<FontAwesomeIcon className='mx-1' icon={faInfoCircle} />}
									{errors.password1}
								</Form.Control.Feedback>
							) : null}
						</Form.Group>

						<Button
							className='btn-block form-btn mb-0 mt-4'
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
								'RESET'
							)}
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default PasswordResetForm;
