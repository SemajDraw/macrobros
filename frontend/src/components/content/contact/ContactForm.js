import React from 'react';
import { Button, Col, Form, Spinner } from 'react-bootstrap';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { sendEmail } from '../../../actions/contact/contact';
import { Formik } from 'formik';
import { EMAIL_SENT } from '../../../actions/contact/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { Common } from '../../common/Routes';

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
	body: Yup.string()
		.min(2, 'Your question must have at least 2 characters')
		.max(5000, `Your question can't be longer than 5000 characters`)
		.required('Please ask us something...')
});

export const ContactForm = (props) => {
	const dispatch = useDispatch();

	return (
		<div className='contact-form card card-body p-4'>
			<Formik
				initialValues={{ firstName: '', lastName: '', email: '', body: '' }}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					setSubmitting(true);
					sendEmail(values)
						.then((res) => {
							dispatch({ type: EMAIL_SENT, payload: res.data });
							setSubmitting(false);
							resetForm();
							props.props.history.push(Common.FORM_SUCCESS, {
								header: 'Thanks for getting in touch',
								body: `We appreciate your interest to get in touch with us. 
                                    We will be in contact with you as soon as we can!`
							});
						})
						.catch((err) => {
							setSubmitting(false);
							props.props.history.push(Common.FORM_SUCCESS, {
								header: 'Oops something went wrong!',
								body: `It looks like we're experiencing some technical issues. 
                                    Please try again later!`
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
						<Form.Row>
							<Form.Group as={Col} controlId='firstName'>
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

							<Form.Group as={Col} controlId='lastName'>
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
						</Form.Row>

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

						<Form.Group controlId='body'>
							<Form.Label>Ask us anything...</Form.Label>
							<Form.Control
								type='text'
								as='textarea'
								rows='3'
								name='body'
								placeholder='Your questions here...'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.body}
								isInvalid={touched.body && errors.body}
							/>
							{touched.body && errors.body ? (
								<Form.Control.Feedback type='invalid'>
									{<FontAwesomeIcon className='mx-1' icon={faInfoCircle} />}
									{errors.body}
								</Form.Control.Feedback>
							) : null}
						</Form.Group>

						<Button
							className='btn-block mb-0 mt-4'
							disabled={isSubmitting}
							variant='primary'
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
								'CONTACT US'
							)}
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ContactForm;
