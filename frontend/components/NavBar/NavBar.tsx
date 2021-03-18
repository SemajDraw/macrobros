import React, { FC } from 'react';
import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { BLOG } from '../../constants/routes';
import { NavLogo } from './NavLogo';
import { NavDrawer } from './Drawer/NavDrawer';
import { NavMenuItem } from './Menu/NavMenuItem';
import { DarkModePopover } from '../shared/DarkMode/DarkModePopover';
import { NavMenu } from './Menu/NavMenu';

export const NavBar: FC = () => {
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
			>
				<NavLogo display={{ base: 'none', md: 'block' }} />

				<Box display={{ base: 'block', md: 'none' }} onClick={onOpen}>
					<HamburgerIcon w={8} h={8} />
				</Box>

				<Box display={{ base: 'none', md: 'block' }}>
					<Flex align={'center'} justify={'flex-end'}>
						<Box mr={2}>
							<NavMenuItem to={BLOG.BLOGS}>Blogs</NavMenuItem>
						</Box>
						<Box mr={2}>
							<DarkModePopover />
						</Box>
						<NavMenu />
					</Flex>
				</Box>
			</Flex>
			<NavDrawer isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default NavBar;
