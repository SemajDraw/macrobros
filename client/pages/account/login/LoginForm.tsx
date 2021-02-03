import React from 'react';
import * as Yup from 'yup';

import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { ACCOUNT } from '../../../constants/routes';
import { Spinner } from '@chakra-ui/spinner';
import { Field, Form, Formik } from 'formik';
import { Input } from '@chakra-ui/input';
import { Flex, Text } from '@chakra-ui/layout';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/actions/authActions';
import { AUTH } from '../../../redux/types';
import { useAuth } from '../../../providers/AuthProvider';
import WrappedLink from '../../../components/ChakraComponents/WrappedLink';

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email('Please enter a valid email')
		.required('Please enter an email'),
	password: Yup.string().required('Please enter a password')
});

export const LoginForm = () => {
	const { setCookie } = useAuth();
	const dispatch = useDispatch();

	return (
		<Box
			my={5}
			p={6}
			borderWidth='1px'
			borderRadius='lg'
			overflow='hidden'
			shadow='lg'
		>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={validationSchema}
				onSubmit={(
					values: any,
					{ setSubmitting, resetForm, setFieldError }: any
				) => {
					setSubmitting(true);

					login(values)
						.then((res: any) => {
							setCookie('token', res.data.token, {
								path: '/',
								maxAge: 86400,
								sameSite: true
							});
							dispatch({ type: AUTH.LOGIN_SUCCESS, payload: res.data });
							resetForm();
							setSubmitting(false);
						})
						.catch((err: any) => {
							setSubmitting(false);
							dispatch({ type: AUTH.LOGIN_FAIL });
							const field = Object.keys(err.response.data)[0];
							setFieldError(field, err.response.data[field]);
						});
				}}
			>
				{({ handleSubmit, isSubmitting }: any) => (
					<Form onSubmit={handleSubmit}>
						<Field name='email'>
							{({ field, form }: any) => (
								<FormControl isInvalid={form.errors.email && form.touched.email}>
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

						<Field name='password'>
							{({ field, form }: any) => (
								<FormControl
									pt={3}
									isInvalid={form.errors.password && form.touched.password}
								>
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

						<Button
							colorScheme='blue'
							w='100%'
							mt={5}
							disabled={isSubmitting}
							type='submit'
						>
							{isSubmitting ? <Spinner color='white' /> : 'LOGIN'}
						</Button>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default LoginForm;
