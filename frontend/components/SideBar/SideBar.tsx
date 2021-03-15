import React, { FC } from 'react';
import { Box, Grid, GridItem, Text } from '@chakra-ui/layout';
import { CategoryAccordion } from './CategoryAccordion';
import SearchBar from '../shared/SearchBar';
import { PopularBlogs } from './PopularBlogs';

export const SideBar: FC = () => {
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
				<PopularBlogs />
			</GridItem>
		</Grid>
	);
};
