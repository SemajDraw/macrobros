import React, { FC } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Textarea
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { Input } from '@chakra-ui/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { Flex } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { sendEmail } from '../../../redux/actions/contactActions';
import { useRouter } from 'next/router';
import { SUBMIT } from '../../../constants/routes';
import { AxiosError, AxiosResponse } from 'axios';
import { ContactEmail } from '../../../models/ContactEmail';
import { formSubmitted } from '../../../redux/slices/FormSubmitSlice';

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

export const ContactUsForm: FC = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const initialFormValues: ContactEmail = {
		firstName: '',
		lastName: '',
		email: '',
		body: ''
	};

	const contactComplete = (data: string[]): void => {
		dispatch(formSubmitted(data));
		router.push(`${SUBMIT.FORM_SUBMIT}/contact`);
	};

	return (
		<Box my={5} p={6} borderWidth='1px' borderRadius='lg' overflow='hidden' shadow='lg'>
			<Formik
				initialValues={initialFormValues}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					setSubmitting(true);

					sendEmail(values)
						.then((res: AxiosResponse) => {
							setSubmitting(false);
							resetForm();
							contactComplete(res.data.internal);
						})
						.catch((err: AxiosError) => {
							setSubmitting(false);
							contactComplete(err.response?.data.internal);
						});
				}}
			>
				{({ handleSubmit, isSubmitting }) => (
					<Form onSubmit={handleSubmit}>
						<Flex>
							<Field name='firstName'>
								{({ field, form }) => (
									<FormControl mr={3} isInvalid={form.errors.firstName && form.touched.firstName}>
										<FormLabel ml={1} htmlFor='firstName'>
											First name
										</FormLabel>
										<Input {...field} type='text' id='firstName' placeholder='First name' />
										<FormErrorMessage>
											<Flex>
												<Box mx={1}>
													<FontAwesomeIcon icon={faInfoCircle} />
												</Box>
												{form.errors.firstName}
											</Flex>
										</FormErrorMessage>
									</FormControl>
								)}
							</Field>

							<Field name='lastName'>
								{({ field, form }) => (
									<FormControl ml={3} isInvalid={form.errors.lastName && form.touched.lastName}>
										<FormLabel ml={1} htmlFor='lastName'>
											Last name
										</FormLabel>
										<Input {...field} type='text' id='lastName' placeholder='Last name' />
										<FormErrorMessage>
											<Flex>
												<Box mx={1}>
													<FontAwesomeIcon icon={faInfoCircle} />
												</Box>
												{form.errors.lastName}
											</Flex>
										</FormErrorMessage>
									</FormControl>
								)}
							</Field>
						</Flex>

						<Field name='email'>
							{({ field, form }) => (
								<FormControl mt={3} isInvalid={form.errors.email && form.touched.email}>
									<FormLabel ml={1} htmlFor='email'>
										Email
									</FormLabel>
									<Input {...field} type='email' id='email' placeholder='Email' />
									<FormErrorMessage>
										<Flex>
											<Box mx={1}>
												<FontAwesomeIcon icon={faInfoCircle} />
											</Box>
											{form.errors.email}
										</Flex>
									</FormErrorMessage>
								</FormControl>
							)}
						</Field>

						<Field name='body'>
							{({ field, form }) => (
								<FormControl mt={3} isInvalid={form.errors.body && form.touched.body}>
									<FormLabel ml={1}>Message</FormLabel>
									<Input
										as={Textarea}
										{...field}
										type='text'
										id='body'
										placeholder='Ask us anything...'
									/>
									<FormErrorMessage>
										<Flex>
											<Box mx={1}>
												<FontAwesomeIcon icon={faInfoCircle} />
											</Box>
											{form.errors.body}
										</Flex>
									</FormErrorMessage>
								</FormControl>
							)}
						</Field>

						<Button colorScheme='blue' w='100%' mt={5} disabled={isSubmitting} type='submit'>
							{isSubmitting ? <Spinner color='white' /> : 'CONTACT'}
						</Button>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default ContactUsForm;
