import React, { FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popularBlogsSelector } from '../../redux/slices/BlogSlice';
import { getPopularBlogs } from '../../redux/actions/blogActions';
import { Divider, Grid, GridItem, Text } from '@chakra-ui/layout';
import { BlogCard } from './BlogGrid/BlogCard';

export const BlogFooter: FC = () => {
	const dispatch = useDispatch();
	const popularBlogs = useSelector(popularBlogsSelector);

	useEffect(() => {
		dispatch(getPopularBlogs());
	}, []);

	return (
		<Grid templateColumns='repeat(12, 1fr)' gap={6} rowGap={{ base: 6, sm: 8, lg: 10 }}>
			<GridItem colSpan={12}>
				<Text mb={2} fontSize={'xl'} fontWeight={'normal'} opacity={0.85}>
					More From MacroBros
				</Text>
				<Divider />
			</GridItem>
			{popularBlogs?.map((blog, i) => (
				<GridItem key={i} colSpan={{ base: 12, md: 4 }}>
					<BlogCard key={i} blog={blog} />
				</GridItem>
			))}
		</Grid>
	);
};

export default memo(BlogFooter);
