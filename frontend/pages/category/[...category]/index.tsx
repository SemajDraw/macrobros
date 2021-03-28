import React, { FC, useEffect, useState } from 'react';
import { Box, Divider, Grid, GridItem, Text } from '@chakra-ui/layout';
import { LoadingSpinner } from '../../../components/shared/Loading/LoadingSpinner';
import { BlogGrid } from '../../../components/Blog/BlogGrid/BlogGrid';
import StickyBox from 'react-sticky-box';
import { Flex } from '@chakra-ui/react';
import { Pagination } from '../../../components/shared/Pagination/Pagination';
import { BLOG } from '../../../constants/routes';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { categoryBlogsSelector } from '../../../redux/slices/BlogSlice';
import { getCategoryBlogs } from '../../../redux/actions/blogActions';
import { formatSlug } from '../../../utils/stringUtils';
import { SideBar } from '../../../components/SideBar/SideBar';
import { MetaInfo } from '../../../components/shared/MetaInfo';

export const Index: FC = () => {
	const router = useRouter();
	const { category } = router.query;
	const dispatch = useDispatch();
	const categoryBlogs = useSelector(categoryBlogsSelector);
	const [isLoading, setIsLoading] = useState(false);
	const [query, setQuery] = useState('');
	const formattedSlug = formatSlug(query);

	useEffect(() => {
		if (category) {
			setQuery(category[0]);
			dispatch(getCategoryBlogs(category[0], category[1]));
		}
	}, [category]);

	useEffect(() => {
		setIsLoading(false);
	}, [categoryBlogs]);

	return (
		<>
			<MetaInfo
				title={`MacroBros - ${formattedSlug}`}
				description={`Welcome to MacroBros blog. Here you can view blogs under the ${formattedSlug} category`}
			/>
			<Grid
				templateColumns='repeat(12, 1fr)'
				gap={6}
				my={{ base: 6, md: 8, lg: 10 }}
				mx={{ base: '3vw', md: '8vw', lg: '9vw' }}
			>
				<GridItem gridGap={2} colSpan={{ base: 12, lg: 9 }} width={'100%'}>
					<Text as={'h3'} fontSize={'4xl'}>
						{formattedSlug}
					</Text>
					<Divider mb={4} />
					{isLoading ? (
						<Box justifyContent='center' alignItems='center' minHeight='40vh'>
							<LoadingSpinner isLoading={isLoading} />
						</Box>
					) : (
						<>
							<Text ml={1} mb={2} fontWeight={'normal'}>
								{categoryBlogs.totalItems} results found
							</Text>
							<BlogGrid blogs={categoryBlogs.results} />
						</>
					)}
				</GridItem>
				<GridItem colSpan={{ base: 12, lg: 3 }} mt={{ lg: '54px' }}>
					<StickyBox offsetTop={30}>
						<SideBar />
					</StickyBox>
				</GridItem>
				<GridItem colSpan={12}>
					<Flex justifyContent={'center'}>
						<Pagination blogs={categoryBlogs} url={BLOG.CATEGORY} query={query} />
					</Flex>
				</GridItem>
			</Grid>
		</>
	);
};

export default Index;
