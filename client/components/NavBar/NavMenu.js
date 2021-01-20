import React, { useState } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { HamburgerIcon, TriangleDownIcon } from '@chakra-ui/icons';
import {
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverFooter,
	PopoverHeader,
	PopoverTrigger
} from '@chakra-ui/popover';
import { Button } from '@chakra-ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';

const TextItem = ({ children, color }) => (
	<Text
		my={2}
		display='block'
		fontFamily='"Lexend Zetta", sans-serif'
		color={color}
		_hover={{ color: 'linkOrange' }}
	>
		{children}
	</Text>
);

export const Authenticated = ({ firstName }) => {
	const [show, setShow] = useState(false);
	const handleToggle = () => setShow(!show);
	return (
		<>
			<Box cursor={'pointer'} display={{ base: 'none', md: 'block' }}>
				<Popover>
					<PopoverTrigger>
						<Flex>
							<Heading
								as='h3'
								size='md'
								fontWeight={200}
								letterSpacing={'-.1rem'}
								fontFamily='"Lexend Zetta", sans-serif'
								mr={3}
							>
								{firstName}
							</Heading>
							<Box _hover={{ color: 'linkOrange' }}>
								<FontAwesomeIcon icon={faUser} />
								<TriangleDownIcon ml={1} w={3} h={3} mt='auto' />
							</Box>
						</Flex>
					</PopoverTrigger>
					<PopoverContent
						mt={3}
						ml='5em'
						p={2}
						w={40}
						bg='#FFFFFF'
						shadow='black'
						borderColor='gray.300'
						boxShadow='xl'
					>
						<PopoverArrow />
						<PopoverHeader>
							<Text
								my={2}
								display='block'
								fontFamily='"Lexend Zetta", sans-serif'
								color='gray.600'
							>
								Hi {firstName}
							</Text>
						</PopoverHeader>
						<PopoverBody>
							<TextItem color={'gray.700'}>Profile</TextItem>
							<TextItem color={'gray.700'}>Settings</TextItem>
						</PopoverBody>
						<PopoverFooter>
							<TextItem color={'gray.700'}>Logout</TextItem>
						</PopoverFooter>
					</PopoverContent>
				</Popover>
			</Box>

			<Box
				cursor={'pointer'}
				display={{ base: 'block', md: 'none' }}
				onClick={handleToggle}
			>
				<HamburgerIcon w={8} h={8} />
			</Box>
			<Box
				display={{ base: show ? 'block' : 'none', md: 'none' }}
				width={{ base: 'full' }}
				flexGrow={1}
				mt={2}
				focusBorderColor='red'
			>
				<TextItem color={'white'}>Blogs</TextItem>
				<TextItem color={'white'}>Profile</TextItem>
				<TextItem color={'white'}>Logout</TextItem>
			</Box>
		</>
	);
};

export const UnAuthenticated = () => {
	const [show, setShow] = useState(false);
	const handleToggle = () => setShow(!show);

	return (
		<>
			<Box cursor={'pointer'} display={{ base: 'none', md: 'block' }}>
				<Button
					borderRadius={3}
					px={3}
					py={6}
					size='md'
					variant='outline'
					fontWeight={200}
					letterSpacing={'-.2rem'}
					_hover={{ borderColor: 'linkOrange', color: 'linkOrange' }}
				>
					<FontAwesomeIcon size={'2x'} icon={faUserCircle} />
					<Box ml={2}>
						<TextItem>Sign In</TextItem>
					</Box>
				</Button>
			</Box>
			<Box
				cursor={'pointer'}
				display={{ base: 'block', md: 'none' }}
				onClick={handleToggle}
			>
				<HamburgerIcon w={8} h={8} />
			</Box>
			<Box
				display={{ base: show ? 'block' : 'none', md: 'none' }}
				width={{ base: 'full' }}
				alignItems='center'
				flexGrow={1}
				mt={2}
				focusBorderColor='red'
			>
				<TextItem color={'white'}>Blogs</TextItem>
				<TextItem color={'white'}>Sign In</TextItem>
			</Box>
		</>
	);
};

export const NavMenu = ({ isAuthenticated, firstName }) => {
	return (
		<>
			{isAuthenticated ? (
				<Authenticated firstName={firstName} />
			) : (
				<UnAuthenticated />
			)}
		</>
	);
};

export default NavMenu;
