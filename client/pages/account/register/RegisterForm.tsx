import React, { FC } from 'react';
import * as Yup from 'yup';

import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { POLICIES, SUBMIT } from '../../../constants/routes';
import { Spinner } from '@chakra-ui/spinner';
import { Field, Form, Formik } from 'formik';
import { Input } from '@chakra-ui/input';
import { Flex, ListItem, Text, UnorderedList } from '@chakra-ui/layout';
import { REGEX } from '../../../constants/constants';
import { Switch } from '@chakra-ui/switch';
import { WrappedLink } from '../../../components/ChakraComponents/WrappedLink';
import { RegisterFormModel } from '../../../models/RegisterFormModel';
import { register } from '../../../redux/actions/accountActions';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { AxiosError, AxiosResponse } from 'axios';
import { FORM_SUBMIT } from '../../../redux/types';

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
		.matches(REGEX.PASSWORD, 'Password is not valid')
		.required('Please enter a password'),
	password2: Yup.string()
		.oneOf([Yup.ref('password')], 'Password does not match')
		.required('Please confirm your password')
});

export const RegisterForm: FC = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const initialValues: RegisterFormModel = {
		firstName: '',
		lastName: '',
		email: '',
		isSubscribed: true,
		password: '',
		password2: ''
	};

	const registrationComplete = (data: string[]): void => {
		dispatch({ type: FORM_SUBMIT.FORM_SUBMITTED, payload: data });
		router.push(SUBMIT.FORM_SUBMIT);
	};

	return (
		<Box my={5} p={6} borderWidth='1px' borderRadius='lg' overflow='hidden' shadow='lg'>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting, resetForm, setFieldError }) => {
					setSubmitting(true);
					register(values)
						.then((res: AxiosResponse) => {
							resetForm();
							setSubmitting(false);
							registrationComplete(res.data.internal);
						})
						.catch((err: AxiosError) => {
							setSubmitting(false);
							const data: any = err.response?.data;
							if ('internal' in data) {
								registrationComplete(data.internal);
							} else if ('email' in data) {
								setFieldError('email', 'An account with this email already exists!');
							}
						});
				}}
			>
				{({ handleSubmit, isSubmitting }) => (
					<Form onSubmit={handleSubmit}>
						<Field name='firstName'>
							{({ field, form }) => (
								<FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
									<FormLabel ml={1} htmlFor='firstName'>
										First name
									</FormLabel>
									<Input {...field} type='text' id='firstName' placeholder='First name' />
									<FormErrorMessage>
										<Box mx={1}>
											<FontAwesomeIcon icon={faInfoCircle} />
										</Box>
										{form.errors.firstName}
									</FormErrorMessage>
								</FormControl>
							)}
						</Field>

						<Field name='lastName'>
							{({ field, form }) => (
								<FormControl mt={3} isInvalid={form.errors.lastName && form.touched.lastName}>
									<FormLabel ml={1} htmlFor='lastName'>
										Last name
									</FormLabel>
									<Input {...field} type='text' id='lastName' placeholder='Last name' />
									<FormErrorMessage>
										<Box mx={1}>
											<FontAwesomeIcon icon={faInfoCircle} />
										</Box>
										{form.errors.lastName}
									</FormErrorMessage>
								</FormControl>
							)}
						</Field>

						<Field name='email'>
							{({ field, form }) => (
								<FormControl pt={3} isInvalid={form.errors.email && form.touched.email}>
									<FormLabel ml={1} htmlFor='email'>
										Email
									</FormLabel>
									<Input {...field} type='email' id='email' placeholder='Email' />
									<FormErrorMessage>
										<Box mx={1}>
											<FontAwesomeIcon icon={faInfoCircle} />
										</Box>
										{form.errors.email}
									</FormErrorMessage>
								</FormControl>
							)}
						</Field>

						<Field name='isSubscribed'>
							{({ form }) => (
								<FormControl
									pt={3}
									isInvalid={form.errors.isSubscribed && form.touched.isSubscribed}
								>
									<FormLabel ml={1} htmlFor='isSubscribed'>
										Subscribe to our newsletter
									</FormLabel>
									<Flex ml={1}>
										<Switch id='isSubscribed' defaultChecked={true} />
										<Text ml={2} color='gray.600'>
											Send me the latest news from MacroBros
										</Text>
									</Flex>
								</FormControl>
							)}
						</Field>

						<Field name='password'>
							{({ field, form }) => (
								<FormControl pt={3} isInvalid={form.errors.password && form.touched.password}>
									<FormLabel ml={1}>Password</FormLabel>
									<Input {...field} type='password' id='password' placeholder='Password' />
									<FormHelperText ml={1}>
										<UnorderedList textAlign='left'>
											<ListItem>Lets be safe use 8-20 characters</ListItem>
											<ListItem>
												At least 1 number, uppercase character and special character
											</ListItem>
										</UnorderedList>
									</FormHelperText>
									<FormErrorMessage>
										<Box mx={1}>
											<FontAwesomeIcon icon={faInfoCircle} />
										</Box>
										{form.errors.password}
									</FormErrorMessage>
								</FormControl>
							)}
						</Field>

						<Field name='password2'>
							{({ field, form }) => (
								<FormControl pt={3} isInvalid={form.errors.password2 && form.touched.password2}>
									<FormLabel ml={1}>Confirm Password</FormLabel>
									<Input
										{...field}
										type='password'
										id='password2'
										placeholder='Confirm Password'
									/>
									<FormErrorMessage>
										<Box mx={1}>
											<FontAwesomeIcon icon={faInfoCircle} />
										</Box>
										{form.errors.password2}
									</FormErrorMessage>
								</FormControl>
							)}
						</Field>

						<Button colorScheme='blue' w='100%' mt={6} disabled={isSubmitting} type='submit'>
							{isSubmitting ? <Spinner color='white' /> : 'REGISTER'}
						</Button>
						<FormControl py={2}>
							<FormHelperText textAlign='left'>
								<Flex>
									<Text>
										By creating an account, you agree to the{' '}
										<WrappedLink
											color='blue.500'
											_hover={{ color: 'blue.700' }}
											href={POLICIES.TERMS_OF_SERVICE}
										>
											Terms of Service
										</WrappedLink>
										. For more information about MacroBros privacy practices, see the{' '}
										<WrappedLink
											color='blue.500'
											_hover={{ color: 'blue.700' }}
											href={POLICIES.PRIVACY_POLICY}
										>
											MacroBros Privacy Statement
										</WrappedLink>
										. We'll occasionally send you account-related emails.
									</Text>
								</Flex>
							</FormHelperText>
						</FormControl>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default RegisterForm;
