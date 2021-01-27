import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import { ACCOUNT } from '../../constants/routes';
import Link from '../ChakraComponents/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';

export const Btn = (props: any) => {
	const { isAuthenticated, text } = props;
	return (
		<Button
			w={'100%'}
			borderRadius={3}
			px={3}
			py={'1.2em'}
			size={'md'}
			fontSize={18}
			variant={'outline'}
			fontWeight={200}
			letterSpacing={'-.2rem'}
			_hover={{ borderColor: 'linkOrange', color: 'linkOrange' }}
			textDecoration={'none'}
		>
			{isAuthenticated ? (
				<FontAwesomeIcon icon={faSignOutAlt} />
			) : (
				<FontAwesomeIcon style={{ fontSize: '25px' }} icon={faUserCircle} />
			)}
			<Text ml={1} fontSize={16}>
				{text}
			</Text>
		</Button>
	);
};

export const NavButton = (props: any) => {
	const { isAuthenticated, text } = props;
	return isAuthenticated ? (
		<Btn isAuthenticated={isAuthenticated} text={text} />
	) : (
		<Link href={ACCOUNT.LOGIN} _hover={{ textDecoration: 'none' }} w={'100%'}>
			<Btn isAuthenticated={isAuthenticated} text={text} />
		</Link>
	);
};

export default NavButton;
