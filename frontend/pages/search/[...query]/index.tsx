import React, { FC, memo, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchBlogs } from '../../../redux/actions/blogActions';
import { Box, Divider, Grid, GridItem, Text } from '@chakra-ui/layout';
import { BlogGrid } from '../../../components/Blog/BlogGrid/BlogGrid';
import StickyBox from 'react-sticky-box';
import SearchBar from '../../../components/shared/SearchBar';
import { CategoryAccordion } from '../../../components/SideBar/CategoryAccordion';
import { PopularBlogs } from '../../../components/SideBar/PopularBlogs';
import { Pagination } from '../../../components/shared/Pagination/Pagination';
import { Flex } from '@chakra-ui/react';
import { searchBlogsSelector } from '../../../redux/slices/BlogSlice';
import { LoadingSpinner } from '../../../components/shared/Loading/LoadingSpinner';
import { BLOG } from '../../../constants/routes';
import { MetaInfo } from '../../../components/shared/MetaInfo';

export const Search: FC = () => {
	const router = useRouter();
	const { query } = router.query;
	const dispatch = useDispatch();
	const searchBlogs = useSelector(searchBlogsSelector);
	const [isLoading, setIsLoading] = useState(false);
	const [search, setSearch] = useState('');

	useEffect(() => {
		if (query) {
			setSearch(query[0]);
			dispatch(getSearchBlogs(query[0], query[1]));
		}
	}, [query]);

	useEffect(() => {
		setIsLoading(false);
	}, [searchBlogs]);

	return (
		<>
			<MetaInfo
				title={`MacroBros - ${search}`}
				description={`Welcome to MacroBros blog. Here you can search for areas or projects you are in interested in`}
			/>
			<Grid
				templateColumns='repeat(12, 1fr)'
				gap={6}
				my={{ base: 6, md: 8, lg: 10 }}
				mx={{ base: '3vw', md: '8vw', lg: '9vw' }}
			>
				<GridItem gridGap={2} colSpan={{ base: 12, lg: 9 }} width={'100%'}>
					<Text as={'h3'} fontSize={'4xl'}>
						Search
					</Text>
					<SearchBar />
					<Divider my={8} />
					{isLoading ? (
						<Box justifyContent='center' alignItems='center' minHeight='40vh'>
							<LoadingSpinner isLoading={isLoading} />
						</Box>
					) : (
						<>
							<Text ml={1} mb={2} fontWeight={'normal'}>
								{searchBlogs.totalItems} results found
							</Text>
							<BlogGrid blogs={searchBlogs.results} />
						</>
					)}
				</GridItem>
				<GridItem colSpan={{ base: 12, lg: 3 }} mt={{ lg: '54px' }}>
					<StickyBox offsetTop={30}>
						<Box>
							<CategoryAccordion />
						</Box>
						<Text mt={3} fontSize={'2xl'}>
							Popular Blogs
						</Text>
						<PopularBlogs />
					</StickyBox>
				</GridItem>
				<GridItem colSpan={12}>
					<Flex justifyContent={'center'}>
						<Pagination blogs={searchBlogs} url={BLOG.SEARCH} query={search} />
					</Flex>
				</GridItem>
			</Grid>
		</>
	);
};

export default memo(Search);
