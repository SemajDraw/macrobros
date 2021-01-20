import React from 'react';
import { Text } from '@chakra-ui/react';
import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/layout';
import LinkItem from '../LinkItem';
import FooterSocialIcons from './FooterSocialIcons';

export const Footer = () => {
	return (
		<Box bg='layoutBlack'>
			<Grid
				templateColumns='repeat(12, 1fr)'
				gap={2}
				px={{ base: 0, md: '10vw', lg: '14vw' }}
				pt={10}
				pb={3}
				textAlign={{ base: 'center', md: 'left' }}
			>
				<GridItem colSpan={{ base: 12, md: 8, lg: 7 }}>
					<Flex justifyContent={{ base: 'center', md: 'start' }}>
						<Heading as='h1' size='lg'>
							<LinkItem cursor='pointer' color='#FFFFFF'>
								MacroBros
							</LinkItem>
						</Heading>
					</Flex>
				</GridItem>
				<GridItem colSpan={{ base: 12, md: 4, lg: 3 }}>
					<Flex direction='column'>
						<Heading as='h3' size='md' mt={1} mb={3}>
							<LinkItem cursor='pointer' color='#FFFFFF'>
								Contact
							</LinkItem>
						</Heading>
						<LinkItem cursor='pointer' color='#FFFFFF' size='sm'>
							Terms of Service
						</LinkItem>
						<LinkItem cursor='pointer' color='#FFFFFF' size='sm'>
							Privacy Policy
						</LinkItem>
						<LinkItem cursor='pointer' color='#FFFFFF' size='sm'>
							Donate
						</LinkItem>
					</Flex>
				</GridItem>
				<GridItem display={{ base: 'none', lg: 'block' }} colSpan={{ lg: 2 }}>
					<Flex pt={14}>
						<LinkItem cursor='pointer' color='gray.400' size='sm'>
							Blogs
						</LinkItem>
					</Flex>
				</GridItem>
			</Grid>

			<Grid bg='layoutBlack' borderBottom='1px' borderColor='gray.400' py={6}>
				<GridItem px={{ base: 0, md: '10vw', lg: '14vw' }}>
					<FooterSocialIcons as='a' color='white' hover='linkOrange' />
				</GridItem>
			</Grid>

			<Grid bg='layoutBlack'>
				<GridItem py={5} textAlign={'center'}>
					<Text
						my={2}
						display='block'
						fontSize='sm'
						fontFamily='"Lexend Zetta", sans-serif'
						color='white'
					>
						Copyright © MacroBros 2020. All right reserved.
					</Text>
				</GridItem>
			</Grid>
		</Box>
	);
};

export default Footer;
