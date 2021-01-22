import React from 'react';
import { Grid, GridItem } from '@chakra-ui/layout';
import BlogGrid from './BlogGrid/BlogGrid';
import SideBar from '../SideBar/SideBar';

export const BlogGridSideBar = ({ blogs, categories }) => {
	return (
		<Grid
			templateColumns='repeat(12, 1fr)'
			gap={6}
			my={{ base: 6, md: 8, lg: 10 }}
			mx={{ base: '3vw', md: '8vw', lg: '9vw' }}
		>
			<GridItem gridGap={2} colSpan={{ base: 12, lg: 9 }} mx='auto'>
				<BlogGrid blogs={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
			</GridItem>
			<GridItem colSpan={{ base: 12, lg: 3 }}>
				<SideBar categories={categories} />
			</GridItem>
		</Grid>
	);
};

export default BlogGridSideBar;
