import React, { FC } from 'react';
import { Field, Form, Formik } from 'formik';
import { InputGroup, InputRightAddon } from '@chakra-ui/react';
import { Input } from '@chakra-ui/input';
import { Search2Icon } from '@chakra-ui/icons';
import { Spinner } from '@chakra-ui/spinner';
import { useRouter } from 'next/router';
import { BLOG } from '../../constants/routes';

export const SearchBar: FC = () => {
	const router = useRouter();

	return (
		<Formik
			initialValues={{ search: '' }}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				setSubmitting(true);
				router.push(`${BLOG.SEARCH}/${encodeURIComponent(values.search)}`);
				resetForm();
			}}
		>
			{({ handleSubmit, isSubmitting }) => (
				<Form onSubmit={handleSubmit}>
					<Field name='search'>
						{({ field }) => (
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
									background={'#3182CE'}
									_hover={{ background: '#2B6CB0' }}
								>
									{isSubmitting ? <Spinner color='white' /> : <Search2Icon color={'white'} />}
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
