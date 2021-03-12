import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { Input } from '@chakra-ui/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { SUBMIT } from '../../../constants/routes';
import { Spinner } from '@chakra-ui/spinner';
import * as Yup from 'yup';
import { passwordResetRequest } from '../../../redux/actions/accountActions';
import { useRouter } from 'next/router';

const validationSchema = Yup.object().shape({
	email: Yup.string().email('Please enter a valid email').required('Please enter an email')
});

export const ForgotPasswordForm: FC = () => {
	const dispatch = useDispatch();
	const initialValues = { email: '' };
	const router = useRouter();

	return (
		<Box my={5} p={6} borderWidth='1px' borderRadius='lg' overflow='hidden' shadow='lg'>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					setSubmitting(true);
					dispatch(passwordResetRequest(values));
					router.push(`${SUBMIT.FORM_SUBMIT}/reset-password`);
					setSubmitting(false);
					resetForm();
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

						<Button colorScheme='blue' w='100%' mt={5} disabled={isSubmitting} type='submit'>
							{isSubmitting ? <Spinner color='white' /> : 'RESET'}
						</Button>
					</Form>
				)}
			</Formik>
		</Box>
	);
};
