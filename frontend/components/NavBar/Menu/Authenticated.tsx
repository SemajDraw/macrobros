import React, { FC } from 'react';
import { useAuth } from '../../../providers/AuthProvider';
import { useDispatch } from 'react-redux';
import { Avatar, Box, Divider, Flex, IconButton, Text } from '@chakra-ui/react';
import { formatUserInitials } from '../../../utils/stringUtils';
import {
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverFooter,
	PopoverHeader,
	PopoverTrigger
} from '@chakra-ui/popover';
import { WrappedLink } from '../../ChakraComponents/WrappedLink';
import { ACCOUNT, BLOG } from '../../../constants/routes';
import { logout } from '../../../redux/actions/authActions';
import { PopoverText } from './PopoverText';

interface AuthenticatedProps {
	firstName: string;
	lastName: string;
}

export const Authenticated: FC<AuthenticatedProps> = ({ firstName, lastName }) => {
	const { removeCookie } = useAuth();
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
			<Popover placement='bottom' gutter={20} closeOnBlur={true} closeOnEsc={true}>
				<PopoverTrigger>
					<IconButton
						aria-label='Search database'
						bg={'transparent'}
						_hover={{ bg: 'transparent' }}
						_active={{ bg: 'transparent' }}
						icon={<Avatar cursor={'pointer'} size={'sm'} />}
					/>
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
						<WrappedLink href={ACCOUNT.PROFILE}>
							<Flex align={'center'}>
								<Avatar size={'sm'} mr={2} />
								<PopoverText color={'gray.700'}>{`${firstName} ${lastName}`}</PopoverText>
							</Flex>
						</WrappedLink>
					</PopoverHeader>
					<PopoverArrow />
					<PopoverBody px={0} py={2}>
						<Box px={4} pb={2}>
							<WrappedLink href={ACCOUNT.PROFILE}>
								<PopoverText color={'gray.600'}>Profile</PopoverText>
							</WrappedLink>
							<WrappedLink href={ACCOUNT.SETTINGS}>
								<PopoverText color={'gray.600'}>Settings</PopoverText>
							</WrappedLink>
						</Box>
						<Divider />
						<Box px={4} pt={2}>
							<WrappedLink href={BLOG.BLOGS}>
								<PopoverText color={'gray.600'}>Blogs</PopoverText>
							</WrappedLink>
						</Box>
					</PopoverBody>
					<PopoverFooter px={4} pb={3}>
						<Box
							onClick={() => {
								dispatch(logout());
								removeCookie('token');
							}}
						>
							<PopoverText color={'gray.600'}>Sign Out</PopoverText>
						</Box>
					</PopoverFooter>
				</PopoverContent>
			</Popover>
		</Flex>
	);
};
