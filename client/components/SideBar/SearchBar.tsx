import React from 'react';
import { Field, Form, Formik } from 'formik';
import {
	Box,
	Button,
	FormControl,
	InputGroup,
	InputRightElement,
	InputRightAddon
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/input';
import { CheckIcon, Search2Icon } from '@chakra-ui/icons';

export const SearchBar = () => {
	return (
		<Formik
			initialValues={{ search: '' }}
			onSubmit={(values, { setSubmitting, resetForm, setFieldError }) => {
				resetForm();
				setSubmitting(true);
				console.log('search value', values.search);
			}}
		>
			{({ handleSubmit, isSubmitting }) => (
				<Form onSubmit={handleSubmit}>
					<Field name='search'>
						{({ field, form }) => (
							<InputGroup size='md'>
								<Input
									{...field}
									borderRadius={4}
									h={12}
									id='search'
									placeholder='Search Blogs'
								/>
								<InputRightAddon
									as={'button'}
									h={12}
									type={'submit'}
									style={{ background: '#2B6CB0' }}
								>
									<Search2Icon color={'white'} />
								</InputRightAddon>
							</InputGroup>
						)}
					</Field>
				</Form>
			)}
		</Formik>
	);
};

export default SearchBar;
