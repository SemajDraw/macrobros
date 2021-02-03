import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { Text } from '@chakra-ui/layout';
import { MacroBrosIcon } from './Icons/MacroBrosIcon';
import SocialIcons from './Icons/SocialIcons';
import { useColorModeValue } from '@chakra-ui/color-mode';
import MetaInfo from './MetaInfo';

export const FormPage = ({
	children,
	meta,
	heading,
	icons,
	minWidth = { base: '85%', sm: '355px', md: '350px', lg: '400px' },
	maxWidth = { base: '85%', sm: '400px', lg: '450px' }
}: any) => {
	const iconColor = useColorModeValue('black', 'white');

	return (
		<Flex
			minHeight='85vh'
			align='center'
			justifyContent='center'
			my={10}
			direction={'column'}
			width={'100%'}
		>
			<MetaInfo title={meta.title} description={meta.description} />
			<Flex
				direction={'column'}
				minWidth={minWidth}
				maxWidth={maxWidth}
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
					<Box w={'100%'} mt={6} px={{ base: 10, md: 12, lg: 16 }}>
						<SocialIcons iconColor={iconColor} />
					</Box>
				) : null}
			</Flex>
		</Flex>
	);
};

export default FormPage;
