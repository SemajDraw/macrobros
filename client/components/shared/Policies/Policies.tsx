import React from 'react';
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/layout';
import styles from './Policies.module.scss';
import useFormatDate from '../../../hooks/useFormatDate';

export const Policies = ({ content, lastModified, title }) => {
	return (
		<Flex px={{ base: '2em', md: '10vw', lg: '14vw' }} direction='column'>
			<Heading as='h1' fontSize='2.5rem' lineHeight={1.2} fontWeight={600} py={12}>
				{title}
			</Heading>
			<Box
				className={styles.content}
				dangerouslySetInnerHTML={{
					__html: content
				}}
			/>
			<Box py={8}>
				<Text>Last updated on {useFormatDate(lastModified, 'MMMM D, YYYY')}.</Text>
			</Box>
			<Box pb={14} px={14}>
				<Divider />
				<Divider />
			</Box>
		</Flex>
	);
};

export default Policies;
