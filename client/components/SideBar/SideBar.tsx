import React from 'react';
import { Box, Grid, GridItem, Text } from '@chakra-ui/layout';
import CategoryAccordion from './CategoryAccordion';
import SearchBar from '../shared/SearchBar';

export const SideBar = () => {
	return (
		<Grid templateColumns='repeat(12, 1fr)' gap={2}>
			<GridItem colSpan={12}>
				<Box>
					<SearchBar />
				</Box>
				<Box pt={4}>
					<CategoryAccordion />
				</Box>
				<Text mt={3} fontSize={'2xl'}>
					Popular Blogs
				</Text>
			</GridItem>
		</Grid>
	);
};

export default SideBar;
