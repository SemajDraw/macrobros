import React, { FC } from 'react';
import { REGEX } from '../../constants/constants';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { Input } from '@chakra-ui/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { Spinner } from '@chakra-ui/spinner';
import { ListItem, UnorderedList } from '@chakra-ui/layout';
import { passwordReset } from '../../redux/actions/accountActions';
import { SUBMIT } from '../../constants/routes';

const validationSchema = Yup.object().shape({
	password: Yup.string()
		.matches(REGEX.PASSWORD, 'Password is not valid')
		.required('Please enter a password'),
	password1: Yup.string()
		.oneOf([Yup.ref('password')], 'Passwords do not match')
		.required('Please confirm your password')
});

export const PasswordResetForm: FC = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { user, token } = router.query;
	const initialValues = {
		user: user as string,
		token: token as string,
		password: '',
		password1: ''
	};

	return (
		<Box my={5} p={6} borderWidth='1px' borderRadius='lg' overflow='hidden' shadow='lg'>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					setSubmitting(true);
					dispatch(passwordReset(values));
					router.push(`${SUBMIT.FORM_SUBMIT}/password-reset`);
					setSubmitting(false);
					resetForm();
				}}
			>
				{({ handleSubmit, isSubmitting }) => (
					<Form onSubmit={handleSubmit}>
						<Field name='password'>
							{({ field, form }) => (
								<FormControl isInvalid={form.errors.password && form.touched.password}>
									<FormLabel ml={1}>Password</FormLabel>
									<Input
										{...field}
										autoComplete='new-password'
										type='password'
										id='password'
										placeholder='Password'
									/>
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

						<Field name='password1'>
							{({ field, form }) => (
								<FormControl mt={5} isInvalid={form.errors.password1 && form.touched.password1}>
									<FormLabel ml={1}>Confirm Password</FormLabel>
									<Input
										{...field}
										autoComplete='new-password'
										type='password'
										id='password1'
										placeholder='Confirm Password'
									/>
									<FormErrorMessage>
										<Box mx={1}>
											<FontAwesomeIcon icon={faInfoCircle} />
										</Box>
										{form.errors.password1}
									</FormErrorMessage>
								</FormControl>
							)}
						</Field>

						<Button colorScheme='blue' w='100%' mt={5} disabled={isSubmitting} type='submit'>
							{isSubmitting ? <Spinner color='white' /> : 'RESET'}
						</Button>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default PasswordResetForm;
