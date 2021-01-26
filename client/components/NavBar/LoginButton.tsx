import React from 'react';
import { Button, Link, Text } from '@chakra-ui/react';
import { ACCOUNT } from '../../constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';

export const LoginButton = () => {
	return (
		<Link href={ACCOUNT.LOGIN} _hover={{ textDecoration: 'none' }} w={'100%'}>
			<Button
				w={'100%'}
				borderRadius={3}
				px={3}
				py={6}
				size='md'
				fontSize={18}
				variant='outline'
				fontWeight={200}
				letterSpacing={'-.2rem'}
				_hover={{ borderColor: 'linkOrange', color: 'linkOrange' }}
			>
				<FontAwesomeIcon style={{fontSize: '28px'}} icon={faUserCircle} />
				<Text ml={1} fontSize={16}>Sign In</Text>
			</Button>
		</Link>
	);
};

export default LoginButton;
