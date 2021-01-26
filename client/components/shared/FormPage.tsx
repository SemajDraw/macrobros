import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { Text } from '@chakra-ui/layout';
import { MacroBrosIcon } from './MacroBrosIcon';
import SocialIcons from './SocialIcons';
import { useColorModeValue } from '@chakra-ui/color-mode';

export const FormPage = ({ children, meta, heading, icons }) => {
	const iconColor = useColorModeValue('black', 'white');

	return (
		<Flex
			minHeight='85vh'
			align='center'
			my={10}
			direction={'column'}
			width={'100%'}
		>
			<Head>
				<title>{meta.title}</title>
				<meta name='description' content={meta.description} />
			</Head>
			<Flex
				direction={'column'}
				minWidth={{ base: '85%', sm: '60%', md: '350px', lg: '400px' }}
				align='center'
			>
				<Box h='100px' w='100px'>
					<MacroBrosIcon id='login' strokeColor={iconColor} />
				</Box>
				<Box>
					<Text as='h3' fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={500}>
						{heading}
					</Text>
				</Box>

				<Box w={'100%'}>{children}</Box>

				{icons ? (
					<Box w={'100%'} mt={16} px={{ base: 10, md: 12, lg: 16 }}>
						<SocialIcons iconColor={iconColor} />
					</Box>
				) : null}
			</Flex>
		</Flex>
	);
};

export default FormPage;
