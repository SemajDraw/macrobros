import React, { FC } from 'react';
import {
	Box,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Text
} from '@chakra-ui/react';
import { useSwipeable } from 'react-swipeable';
import { MacroBrosIcon } from '../../shared/Icons/MacroBrosIcon';
import { useAuth } from '../../../providers/AuthProvider';
import { NavDrawerFooter } from './NavDrawerFooter';
import { NavDrawerBody } from './NavDrawerBody';

interface NavDrawerProps {
	isOpen: boolean;
	onClose: () => void;
}

export const NavDrawer: FC<NavDrawerProps> = ({ isOpen, onClose }) => {
	const { isAuthenticated } = useAuth();
	const handlers = useSwipeable({
		onSwipedRight: () => {
			onClose();
		}
	});

	return (
		<Drawer isOpen={isOpen} placement='right' onClose={onClose}>
			<DrawerOverlay {...handlers}>
				<DrawerContent
					bg={'layoutBlack'}
					color={'white'}
					fontFamily='"Lexend Zetta", sans-serif'
				>
					<DrawerCloseButton />
					<DrawerHeader py={12}>
						<Flex direction={'column'} align={'center'} justifyContent={'center'}>
							<Box h={16} w={16}>
								<MacroBrosIcon id={'drawer'} strokeColor={'white'} />
							</Box>
							<Text pt={1}>MacroBros</Text>
						</Flex>
					</DrawerHeader>

					<DrawerBody>
						<NavDrawerBody isAuthenticated={isAuthenticated} onClose={onClose} />
					</DrawerBody>

					<DrawerFooter>
						<NavDrawerFooter isAuthenticated={isAuthenticated} onClose={onClose} />
					</DrawerFooter>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	);
};
