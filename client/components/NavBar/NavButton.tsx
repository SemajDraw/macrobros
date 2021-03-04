import React, { FC } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { ACCOUNT } from '../../constants/routes';
import { WrappedLink } from '../ChakraComponents/WrappedLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/authActions';
import { useAuth } from '../../providers/AuthProvider';

interface NavButtonProps {
	isAuthenticated: boolean;
	text: string;
}

const Btn: FC<NavButtonProps> = ({ isAuthenticated, text }) => (
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

export const NavButton: FC<NavButtonProps> = ({ isAuthenticated, text }) => {
	const dispatch = useDispatch();
	const { removeCookie } = useAuth();

	return isAuthenticated ? (
		<Box
			onClick={() => {
				dispatch(logout());
				removeCookie('token');
			}}
		>
			<Btn isAuthenticated={isAuthenticated} text={text} />
		</Box>
	) : (
		<WrappedLink href={ACCOUNT.LOGIN} _hover={{ textDecoration: 'none' }} w={'100%'}>
			<Btn isAuthenticated={isAuthenticated} text={text} />
		</WrappedLink>
	);
};
