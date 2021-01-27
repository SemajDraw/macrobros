import React from 'react';
import { Avatar, Box, Divider, Flex, Text } from '@chakra-ui/react';
import {
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverFooter,
	PopoverHeader,
	PopoverTrigger
} from '@chakra-ui/popover';
import { formatUserInitials } from '../../utils/stringUtils';
import { useDispatch } from 'react-redux';
import Link from '../ChakraComponents/Link';
import { HOME } from '../../constants/routes';
import NavButton from './NavButton';
import { useAuth } from '../../providers/AuthProvider';
import { logout } from '../../redux/actions/auth';

const PopoverText = (props: any) => {
	const { children, color } = props;

	return (
		<Text
			fontSize={'lg'}
			color={color}
			fontWeight={'normal'}
			_hover={{ color: 'black', fontWeight: 'normal' }}
			cursor={'pointer'}
		>
			{children}
		</Text>
	);
};

export const Authenticated = (props: any) => {
	const { firstName, lastName } = props;

	const dispatch = useDispatch();

	return (
		<Flex>
			<Flex align='center'>
				<Text
					size='md'
					letterSpacing={'-.1rem'}
					fontFamily='"Lexend Zetta", sans-serif'
					mr={3}
				>
					{formatUserInitials([firstName, lastName])}
				</Text>
			</Flex>
			<Popover gutter={20} isLazy>
				<PopoverTrigger>
					<Avatar cursor={'pointer'} size={'sm'} />
				</PopoverTrigger>
				<PopoverContent
					maxWidth={'75%'}
					borderRadius={2}
					mx={'12.5%'}
					boxShadow={'0 10px 30px -5px rgba(0, 0, 0, 0.2)'}
					fontFamily={'Roboto'}
					fontWeight='light'
				>
					<PopoverHeader fontWeight='light' px={4} pt={6} pb={4}>
						<Link href={HOME}>
							<Flex align={'center'}>
								<Avatar size={'sm'} mr={2} />
								<PopoverText color={'gray.700'}>
									{`${firstName} ${lastName}`}
								</PopoverText>
							</Flex>
						</Link>
					</PopoverHeader>
					<PopoverArrow />
					<PopoverBody px={0} py={2}>
						<Box px={4} pb={2}>
							<Link href={HOME}>
								<PopoverText color={'gray.600'}>Profile</PopoverText>
							</Link>
							<Link href={HOME}>
								<PopoverText color={'gray.600'}>Settings</PopoverText>
							</Link>
						</Box>
						<Divider />
						<Box px={4} pt={2}>
							<Link href={HOME}>
								<PopoverText color={'gray.600'}>Blogs</PopoverText>
							</Link>
						</Box>
					</PopoverBody>
					<PopoverFooter px={4} pb={3}>
						<Box onClick={() => dispatch(logout())}>
							<PopoverText color={'gray.600'}>Sign Out</PopoverText>
						</Box>
					</PopoverFooter>
				</PopoverContent>
			</Popover>
		</Flex>
	);
};

export const NavMenu = () => {
	const { isAuthenticated, user } = useAuth();
	return isAuthenticated ? (
		<Authenticated {...user} />
	) : (
		<NavButton isAuthenticated={isAuthenticated} text={'Sign In'} />
	);
};

export default NavMenu;
