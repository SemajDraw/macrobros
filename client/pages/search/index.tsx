import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchBlogs } from '../../redux/actions/blogActions';
import { Box, Divider, Grid, GridItem, Text } from '@chakra-ui/layout';
import { BlogGrid } from '../../components/shared/BlogGrid/BlogGrid';
import StickyBox from 'react-sticky-box';
import SearchBar from '../../components/shared/SearchBar';
import { CategoryAccordion } from '../../components/SideBar/CategoryAccordion';
import { PopularBlogs } from '../../components/SideBar/PopularBlogs';
import { Pagination } from '../../components/shared/Pagination/Pagination';
import { Flex } from '@chakra-ui/react';
import { SEARCH } from '../../constants/routes';
import { State } from '../../redux/RootReducer';

export const Search: FC = () => {
	const router = useRouter();
	const { query, page } = router.query;
	const dispatch = useDispatch();
	const searchBlogs = useSelector((state: State) => state.blog.searchBlogs);

	const [isLoading, setIsLoading] = useState(true);
	const [hasResults, setHasResults] = useState(false);
	const [totalResults, setTotalResults] = useState<number>();

	useEffect(() => {
		if (query && page) {
			dispatch(getSearchBlogs(query as string, page as string));
		} else if (query) {
			dispatch(getSearchBlogs(query as string));
		}
	}, [query, page]);

	useEffect(() => {
		if (searchBlogs.results !== undefined) {
			if (searchBlogs.results.length !== 0) {
				setHasResults(true);
				setIsLoading(false);
			}
			if (searchBlogs.results.length === 0) {
				setHasResults(false);
				setIsLoading(false);
			}
			setTotalResults(searchBlogs.totalItems);
		}
	}, [searchBlogs]);

	return (
		<Grid
			templateColumns='repeat(12, 1fr)'
			gap={6}
			my={{ base: 6, md: 8, lg: 10 }}
			mx={{ base: '3vw', md: '8vw', lg: '9vw' }}
		>
			<GridItem gridGap={2} colSpan={{ base: 12, lg: 9 }} mx='auto'>
				<Text as={'h3'} fontSize={'4xl'}>
					Search
				</Text>
				<SearchBar />
				<Divider my={8} />
				<Text ml={1} mb={2} fontWeight={'normal'}>
					{totalResults} results found
				</Text>
				<BlogGrid blogs={searchBlogs.results} />
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
					<Pagination blogs={searchBlogs} url={SEARCH} query={query} />
				</Flex>
			</GridItem>
		</Grid>
	);
};

export default Search;
