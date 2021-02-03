import React from 'react';
import {
	Box,
	Button,
	Flex,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverFooter,
	PopoverHeader,
	PopoverTrigger,
	Switch,
	Text,
	useColorMode
} from '@chakra-ui/react';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DarkModePopover = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';

	return (
		<Flex>
			<Popover placement='bottom' closeOnBlur={true}>
				<PopoverTrigger>
					<Button
						bg={'transparent'}
						_hover={{ bg: 'transparent', color: 'linkOrange' }}
						_active={{ bg: 'transparent', color: 'linkOrange' }}
					>
						<FontAwesomeIcon icon={faEllipsisV} />
					</Button>
				</PopoverTrigger>
				<PopoverContent
					p={1}
					fontFamily={'Roboto'}
					color={isDark ? 'white' : 'black'}
				>
					<PopoverHeader pt={4} fontWeight={'medium'} fontSize={'xl'} border='0'>
						Dark theme
					</PopoverHeader>
					<PopoverArrow />
					<PopoverCloseButton />
					<PopoverBody>
						<Text fontWeight={'normal'}>
							Dark theme turns the light surfaces of the page dark, creating an
							experience ideal for night. Try it out!
						</Text>
						<Text fontWeight={'normal'} mt={3}>
							Your Dark theme setting will apply to this browser only
						</Text>
					</PopoverBody>
					<PopoverFooter
						border='0'
						d='flex'
						alignItems='center'
						justifyContent='space-between'
						pb={4}
					>
						<Box fontWeight={'medium'} fontSize='md'>
							DARK THEME
						</Box>
						<Switch
							top='1rem'
							right='1rem'
							color='green'
							isChecked={isDark}
							onChange={toggleColorMode}
						/>
					</PopoverFooter>
				</PopoverContent>
			</Popover>
		</Flex>
	);
};

export default DarkModePopover;
