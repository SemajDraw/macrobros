import React from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay
} from '@chakra-ui/react';
import NavLogo from './NavLogo';
import { BLOG } from '../../constants/routes';
import NavMenuItem from './NavMenuItem';
import LoginButton from './LoginButton';

export const NavDrawer = ({ isOpen, onClose }) => {
	return (
		<Drawer isOpen={isOpen} placement='right' onClose={onClose}>
			<DrawerOverlay>
				<DrawerContent
					bg={'layoutBlack'}
					color={'white'}
					fontFamily='"Lexend Zetta", sans-serif'
				>
					<DrawerCloseButton />
					<DrawerHeader py={12}>
						<NavLogo display={'block'} />
					</DrawerHeader>

					<DrawerBody>
						<NavMenuItem to={BLOG.BLOGS}>Blogs</NavMenuItem>
					</DrawerBody>

					<DrawerFooter>
						<LoginButton />
					</DrawerFooter>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	);
};

export default NavDrawer;
