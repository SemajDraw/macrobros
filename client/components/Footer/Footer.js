import React from 'react';
import { Flex, Grid, GridItem, Heading } from '@chakra-ui/layout';
import LinkItem from '../LinkItem';
import SocialIcons from '../SocialIcons';

export const Footer = () => {
	return (
		<>
			<Grid
				templateColumns='repeat(12, 1fr)'
				gap={2}
				bg='layoutBlack'
				px={{ base: 0, md: '10vw', lg: '20vw' }}
				pt={10}
			>
				<GridItem colSpan={{ base: 12, md: 8, lg: 7 }} bg='papayawhip'>
					<Flex>
						<Heading as='h1' size='lg'>
							<LinkItem cursor='pointer' color='#FFFFFF'>
								MacroBros
							</LinkItem>
						</Heading>
					</Flex>
				</GridItem>
				<GridItem colSpan={{ base: 12, md: 4, lg: 3 }} bg='papayawhip'>
					<Flex direction='column'>
						<Heading as='h3' size='md' mb={3}>
							<LinkItem color='#FFFFFF'>Contact</LinkItem>
						</Heading>
						<LinkItem cursor='pointer' color='#FFFFFF'>
							Terms of Service
						</LinkItem>
						<LinkItem cursor='pointer' color='#FFFFFF'>
							Privacy Policy
						</LinkItem>
						<LinkItem cursor='pointer' color='#FFFFFF'>
							Donate
						</LinkItem>
					</Flex>
				</GridItem>
				<GridItem
					display={{ base: 'none', lg: 'block' }}
					colSpan={{ lg: 2 }}
					bg='papayawhip'
				>
					<Flex pt={12}>
						<LinkItem cursor='pointer' color='gray.200'>
							Blogs
						</LinkItem>
					</Flex>
				</GridItem>
			</Grid>

			<Grid bg='layoutBlack'>
				<GridItem>
					<SocialIcons as={'a'} color='white' />
				</GridItem>
			</Grid>
		</>
	);
};

export default Footer;
