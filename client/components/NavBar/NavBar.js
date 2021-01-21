import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import NavMenu from './NavMenu';
import { MacroBrosIcon } from '../shared/MacroBrosIcon';
import { Grid, GridItem } from '@chakra-ui/layout';
import Link from 'next/link';

const Header = (props) => {
	return (
		<Grid
			templateColumns='repeat(12, 1fr)'
			gap={0}
			as='nav'
			py='1.5rem'
			px={{ base: '2em', md: '10vw', lg: '14vw' }}
			bg='layoutBlack'
			color='white'
			justifyContent='center'
		>
			<GridItem colSpan={{ base: 6, md: 4 }} align='start' my='auto'>
				<Link href='/'>
					<Box h={12} w={12} cursor={'pointer'}>
						<MacroBrosIcon id='nav' strokeColor='white' />
					</Box>
				</Link>
			</GridItem>

			<GridItem
				display={{ base: 'none', md: 'block' }}
				colSpan={{ base: 0, md: 4 }}
				align='center'
				my='auto'
			>
				<Box>
					<Heading
						as='h1'
						size='md'
						letterSpacing={'-.1rem'}
						fontWeight={200}
						fontFamily='"Lexend Zetta", sans-serif'
						_hover={{ color: 'linkOrange' }}
						cursor={'pointer'}
					>
						Blogs
					</Heading>
				</Box>
			</GridItem>

			<GridItem colSpan={{ base: 6, md: 4 }} ml='auto' my='auto'>
				<NavMenu isAuthenticated={true} firstName={'James'} />
			</GridItem>
		</Grid>
	);
};

export default Header;
