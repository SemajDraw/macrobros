import React from 'react';
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
	Link,
	Text
} from '@chakra-ui/react';
import {ACCOUNT, BLOG} from '../../constants/routes';
import NavMenuItem from './NavMenuItem';
import NavButton from './NavButton';
import {useSwipeable} from 'react-swipeable';
import {MacroBrosIcon} from '../shared/MacroBrosIcon';
import {useAuth} from '../../providers/AuthProvider';

export const NavDrawer = (props: any) => {
	const { isAuthenticated, user } = useAuth();
	const { isOpen, onClose } = props;
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
						<NavMenuItem to={BLOG.BLOGS}>Blogs</NavMenuItem>
					</DrawerBody>

					<DrawerFooter>
						{isAuthenticated ? (
							<NavButton isAuthenticated={isAuthenticated} text={'Sign Out'} />
						) : (
							<Flex direction={'column'} w={'100%'}>
								<NavButton isAuthenticated={isAuthenticated} text={'Sign In'} />
								<Flex mt={3}>
									<Text mr={1} fontSize={'xs'}>
										Not registered yet?{' '}
										<Link
											color='blue.300'
											_hover={{ color: 'blue.400' }}
											href={ACCOUNT.REGISTER}
										>
											Sign Up
										</Link>
									</Text>
								</Flex>
							</Flex>
						)}
					</DrawerFooter>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	);
};

export default NavDrawer;
