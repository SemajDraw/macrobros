import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { Grid, GridItem, Heading } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import { MacroBrosIcon } from './MacroBrosIcon';
import SocialIcons from './SocialIcons';

export const LoginRegister = ({ children, meta, heading, icons }) => {
	const router = useRouter();

	useEffect(() => {
		// if (isAuthenticated) {
		// router.push('/');
		// }
	}, []);

	return (
		<Grid
			templateColumns='repeat(11, 1fr)'
			minHeight='85vh'
			align='center'
			alignItems='center'
			my={10}
		>
			<Head>
				<title>{meta.title}</title>
				<meta name='description' content={meta.description} />
			</Head>
			<GridItem
				colStart={{ base: 2, sm: 3, md: 4, lg: 5 }}
				colSpan={{ base: 9, sm: 7, md: 5, lg: 3 }}
			>
				<Box h='100px' w='100px'>
					<MacroBrosIcon id='login' strokeColor='black' />
				</Box>
				<Box>
					<Heading as='h3' size='xl' fontWeight={500}>
						{heading}
					</Heading>
				</Box>

				{children}

				{icons ? (
					<Box mt={16} mx={{ base: 10, md: 12, lg: 16 }}>
						<SocialIcons />
					</Box>
				) : null}
			</GridItem>
		</Grid>
	);
};

export default LoginRegister;
