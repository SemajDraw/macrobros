import React, { FC } from 'react';
import { Box, Flex, LayoutProps } from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';
import { MacroBrosIcon } from './Icons/MacroBrosIcon';
import { SocialIcons } from './Icons/SocialIcons';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { MetaInfo } from './MetaInfo';

interface FormSubmitPageProps extends LayoutProps {
	body: string;
	meta: {
		title: string;
		description: string;
	};
	heading: string;
	icons: boolean;
}

export const FormSubmitPage: FC<FormSubmitPageProps> = ({
	body,
	meta,
	heading,
	icons,
	minWidth = { base: '85%', sm: '355px', md: '450px', lg: '500px' },
	maxWidth = { base: '85%', sm: '400px', lg: '550px' }
}) => {
	const iconColor = useColorModeValue('black', 'white');

	return (
		<Flex
			minHeight='80vh'
			align='center'
			justifyContent='center'
			direction={'column'}
			width={'100%'}
			bg={'white'}
		>
			<MetaInfo title={meta.title} description={meta.description} />
			<Flex
				direction={'column'}
				minWidth={minWidth}
				maxWidth={maxWidth}
				align='center'
				shadow={'0 10px 30px -5px rgba(0, 0, 0, 0.2)'}
				borderRadius={6}
				p={12}
			>
				<Box h='100px' w='100px'>
					<MacroBrosIcon id='login' strokeColor={iconColor} />
				</Box>
				<Box mt={6}>
					<Text
						as='h3'
						fontSize={{ base: '2xl', sm: '2xl' }}
						fontWeight={'medium'}
						align={'center'}
					>
						{heading}
					</Text>
				</Box>

				<Box w={'100%'} mt={1}>
					<Text fontSize={'lg'} fontWeight={'normal'} align={'center'}>
						{body}
					</Text>
				</Box>
			</Flex>
			<Flex minWidth={minWidth} maxWidth={maxWidth}>
				{icons ? (
					<Box w={'100%'} mt={6} px={{ base: 10, md: 12, lg: 16 }}>
						<SocialIcons iconColor={iconColor} />
					</Box>
				) : null}
			</Flex>
		</Flex>
	);
};

export default FormSubmitPage;
