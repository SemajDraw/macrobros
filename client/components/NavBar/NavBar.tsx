import React from 'react';
import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { BLOG } from '../../constants/routes';
import NavLogo from './NavLogo';
import NavDrawer from './Drawer/NavDrawer';
import NavMenuItem from './Menu/NavMenuItem';
import DarkModeSwitch from '../shared/DarkModeSwitch';
import NavMenu from './Menu/NavMenu';

export const NavBar = (props: any) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Flex
				as='nav'
				align='center'
				justify='space-between'
				p={5}
				px={{ base: '6vw', md: '10vw', lg: '12vw' }}
				bg={'layoutBlack'}
				color={'white'}
				fontFamily='"Lexend Zetta", sans-serif'
				{...props}
			>
				<NavLogo display={{ base: 'none', md: 'block' }} />

				<Box display={{ base: 'block', md: 'none' }} onClick={onOpen}>
					<HamburgerIcon w={8} h={8} />
				</Box>

				<Box display={{ base: 'none', md: 'block' }}>
					<Flex align={'center'} justify={'flex-end'}>
						<DarkModeSwitch />
						<NavMenuItem to={BLOG.BLOGS}>Blogs</NavMenuItem>
						<NavMenu />
					</Flex>
				</Box>
			</Flex>
			<NavDrawer isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default NavBar;
