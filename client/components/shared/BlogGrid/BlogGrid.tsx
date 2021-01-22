import React from 'react';
import BlogCard from './BlogCard';
import { Grid, GridItem } from '@chakra-ui/react';

export const BlogGrid = ({ blogs }) => {
	const blogCards = blogs.map((blog, i) => <BlogCard key={i} blog={blog} length={blogs.length} index={i}/>);

	return (
		<Grid templateColumns='repeat(12, 1fr)' gap={{ base: 6, lg: 8 }}>
			{blogCards.map((blogCard, i) => (
				<GridItem key={i} colSpan={{ base: 12, md: 6 }}>
					{blogCard}
				</GridItem>
			))}
		</Grid>
	);
};

export default BlogGrid;
