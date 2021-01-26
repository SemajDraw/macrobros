import React, { useEffect } from 'react';
import { Flex, Link, Text } from '@chakra-ui/react';
import { ACCOUNT } from '../../../constants/routes';
import FormPage from '../../../components/shared/FormPage';
import RegisterForm from './RegisterForm';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export const Index = () => {
	const router = useRouter();
	const { isAuthenticated } = useSelector((state) => state.auth);

	// useEffect(() => {
	// 	if (isAuthenticated) {
	// 		router.push('/');
	// 	}
	// }, [isAuthenticated]);

	return (
		<FormPage
			icons={false}
			meta={{
				title: 'MacroBros - Sign Up',
				desc:
					'Create your MacroBros account today and keep up to date with the most relevant financial topics'
			}}
			heading={'Create your account'}
		>
			<RegisterForm />

			<Flex
				my={5}
				p={6}
				borderWidth='1px'
				borderRadius='lg'
				overflow='hidden'
				shadow='lg'
				justifyContent='center'
			>
				<Flex>
					<Text mr={1}>
						Already have an account?{' '}
						<Link
							color='blue.500'
							_hover={{ color: 'blue.700' }}
							href={ACCOUNT.LOGIN}
						>
							Please login.
						</Link>
					</Text>
				</Flex>
			</Flex>
		</FormPage>
	);
};

export default Index;
