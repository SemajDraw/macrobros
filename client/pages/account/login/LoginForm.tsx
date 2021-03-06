import React, { FC } from 'react';
import * as Yup from 'yup';

import { Box, Button, FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { ACCOUNT } from '../../../constants/routes';
import { Spinner } from '@chakra-ui/spinner';
import { Field, Form, Formik } from 'formik';
import { Input } from '@chakra-ui/input';
import { Flex, Text } from '@chakra-ui/layout';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/actions/authActions';
import { useAuth } from '../../../providers/AuthProvider';
import { WrappedLink } from '../../../components/ChakraComponents/WrappedLink';
import { LoginModel } from '../../../models/LoginModel';
import { AxiosError, AxiosResponse } from 'axios';
import { clearAuth, loginSuccess } from '../../../redux/slices/AuthSlice';

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email('Please enter a valid email')
		.required('Please enter an email'),
	password: Yup.string().required('Please enter a password')
});

export const LoginForm: FC = () => {
	const { setCookie } = useAuth();
	const dispatch = useDispatch();
	const initialValues: LoginModel = { email: '', password: '' };

	return (
		<Box my={5} p={6} borderWidth='1px' borderRadius='lg' overflow='hidden' shadow='lg'>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting, resetForm, setFieldError }) => {
					setSubmitting(true);

					login(values)
						.then((res: AxiosResponse) => {
							setCookie('token', res.data.token, {
								path: '/',
								maxAge: 86400,
								sameSite: true
							});
							dispatch(loginSuccess(res.data));
							resetForm();
							setSubmitting(false);
						})
						.catch((err: AxiosError) => {
							setSubmitting(false);
							dispatch(clearAuth());
							const field = Object.keys(err.response?.data)[0];
							setFieldError(field, err.response?.data[field]);
						});
				}}
			>
				{({ handleSubmit, isSubmitting }) => (
					<Form onSubmit={handleSubmit}>
						<Field name='email'>
							{({ field, form }) => (
								<FormControl isInvalid={form.errors.email && form.touched.email}>
									<FormLabel ml={1} htmlFor='email'>
										Email
									</FormLabel>
									<Input
										{...field}
										autoComplete='username'
										type='email'
										id='email'
										placeholder='Email'
									/>
									<FormErrorMessage>
										<Box mx={1}>
											<FontAwesomeIcon icon={faInfoCircle} />
										</Box>
										{form.errors.email}
									</FormErrorMessage>
								</FormControl>
							)}
						</Field>

						<Field name='password'>
							{({ field, form }) => (
								<FormControl pt={3} isInvalid={form.errors.password && form.touched.password}>
									<Flex justifyContent='space-between'>
										<Text ml={1}>Password</Text>
										<WrappedLink
											fontSize='xs'
											color='blue.500'
											_hover={{ color: 'blue.700' }}
											href={ACCOUNT.FORGOT_PASSWORD}
										>
											Forgot password?
										</WrappedLink>
									</Flex>
									<Input
										{...field}
										autoComplete='current-password'
										type='password'
										id='password'
										placeholder='Password'
									/>
									<FormErrorMessage>
										<Box mx={1}>
											<FontAwesomeIcon icon={faInfoCircle} />
										</Box>
										{form.errors.password}
									</FormErrorMessage>
								</FormControl>
							)}
						</Field>

						<Button colorScheme='blue' w='100%' mt={5} disabled={isSubmitting} type='submit'>
							{isSubmitting ? <Spinner color='white' /> : 'LOGIN'}
						</Button>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default LoginForm;
