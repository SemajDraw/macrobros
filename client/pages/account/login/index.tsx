import React, { useEffect } from 'react';
import { Flex, Link, Text } from '@chakra-ui/react';
import LoginForm from './LoginForm';
import { ACCOUNT } from '../../../constants/routes';
import FormPage from '../../../components/shared/FormPage';
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
			icons={true}
			heading={'Sign in to MacroBros'}
			meta={{
				title: 'MacroBros - Login',
				desc:
					"Please sign into your MacroBros account. If you don't have an account, what are you waiting for?"
			}}
		>
			<LoginForm />

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
					<Text mr={1} fontSize={'sm'}>
						New to MacroBros?{' '}
						<Link
							color='blue.500'
							_hover={{ color: 'blue.700' }}
							href={ACCOUNT.REGISTER}
						>
							Create an account.
						</Link>
					</Text>
				</Flex>
			</Flex>
		</FormPage>
	);
};

export default Index;
