import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Button, Form, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import './ForgotPassword.scss';
import { passwordResetRequest } from '../../../actions/account/account';
import { Common } from '../../common/Routes';

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email('Please enter a valid email')
		.required('Please enter an email')
});

export const ForgotPasswordForm = (props) => {
	return (
		<div className='forgot-password-form card card-body p-4'>
			<Formik
				initialValues={{ email: '' }}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting, resetForm, setFieldError }) => {
					setSubmitting(true);

					passwordResetRequest(values)
						.then((res) => {
							resetForm();
							setSubmitting(false);
							if (res.data.success) {
								props.props.history.push(Common.FORM_SUBMIT, {
									header: 'Password reset requested',
									body: `An email has been sent to your email account. 
                                    Please check your inbox to reset your password.`
								});
							}
						})
						.catch((err) => {
							setSubmitting(false);
							setFieldError('email', 'No account with this email exists!');
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

export default ForgotPasswordForm;
