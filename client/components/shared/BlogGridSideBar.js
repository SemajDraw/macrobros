import React from 'react';
import { Grid, GridItem } from '@chakra-ui/layout';
import BlogGrid from './BlogGrid/BlogGrid';

export const BlogGridSideBar = ({ blogs }) => {
	return (
		<Grid
			templateColumns='repeat(12, 1fr)'
			gap={2}
			mt={{ base: 6, md: 8, lg: 10 }}
			mx={{ base: '3vw', md: '8vw', lg: '10vw' }}
		>
			<GridItem colSpan={{ base: 12, lg: 9 }} mx='auto'>
				<BlogGrid blogs={[1, 2, 3, 4]} />
			</GridItem>
			<GridItem colSpan={{ base: 12, lg: 3 }}>here is am cunt</GridItem>
		</Grid>
	);
};

export default BlogGridSideBar;
