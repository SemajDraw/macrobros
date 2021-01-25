import React from 'react';
import { Box, Grid, GridItem, Heading } from '@chakra-ui/layout';
import CategoryAccordion from './CategoryAccordion';
import SearchBar from './SearchBar';

export const SideBar = ({ categories }) => {
	return (
		<Grid templateColumns='repeat(12, 1fr)' gap={2}>
			<GridItem colSpan={12}>
				<Box>
					<SearchBar />
				</Box>
				<Box pt={4}>
					<CategoryAccordion categories={categories} />
				</Box>
				<Heading>Here</Heading>
			</GridItem>
		</Grid>
	);
};

export default SideBar;
