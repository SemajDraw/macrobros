import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import WrappedLink from '../../ChakraComponents/WrappedLink';
import { ACCOUNT, BLOG } from '../../../constants/routes';

export const NavDrawerBody = ({ isAuthenticated, onClose }: any) => {
	return isAuthenticated ? (
		<Flex direction={'column'}>
			<WrappedLink
				href={ACCOUNT.PROFILE}
				_hover={{ color: 'linkOrange' }}
				onClick={() => onClose()}
			>
				<Text _hover={{ color: 'linkOrange' }}>Profile</Text>
			</WrappedLink>
			<WrappedLink pt={2} href={ACCOUNT.SETTINGS} onClick={() => onClose()}>
				<Text _hover={{ color: 'linkOrange' }}>Settings</Text>
			</WrappedLink>
			<WrappedLink mt={10} href={BLOG.BLOGS} onClick={() => onClose()}>
				<Text _hover={{ color: 'linkOrange' }}>Blogs</Text>
			</WrappedLink>
		</Flex>
	) : (
		<Flex direction={'column'}>
			<WrappedLink
				href={BLOG.BLOGS}
				_hover={{ color: 'linkOrange' }}
				onClick={() => onClose()}
			>
				Blogs
			</WrappedLink>
		</Flex>
	);
};
export default NavDrawerBody;
