import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchBlogs } from '../../redux/actions/blogActions';
import { Box, Divider, Grid, GridItem, Text } from '@chakra-ui/layout';
import BlogGrid from '../../components/shared/BlogGrid/BlogGrid';
import StickyBox from 'react-sticky-box';
import SideBar from '../../components/SideBar/SideBar';
import SearchBar from '../../components/shared/SearchBar';
import CategoryAccordion from '../../components/SideBar/CategoryAccordion';

export const Search = () => {
	const router = useRouter();
	const { query } = router.query;
	const dispatch = useDispatch();
	const searchBlogs = useSelector((state: any) => state.blog.searchBlogs);

	const [isLoading, setIsLoading] = useState(true);
	const [hasResults, setHasResults] = useState(false);
	const [totalResults, setTotalResults] = useState(null);

	useEffect(() => {
		if (query) {
			dispatch(getSearchBlogs(query));
		}
	}, [query]);

	useEffect(() => {
		console.log('search res', searchBlogs);
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
			{/*<GridItem colSpan={{ base: 12, lg: 9 }}></GridItem>*/}

			<GridItem gridGap={2} colSpan={{ base: 12, lg: 9 }} mx='auto'>
				<Text as={'h3'} fontSize={'4xl'}>
					Search
				</Text>
				<SearchBar />
				<Divider my={8} />
				<Text ml={1} mb={2} fontWeight={'normal'}>
					{totalResults} results found
				</Text>
				<BlogGrid
					blogs={[
						1,
						2,
						3,
						4,
						5,
						6,
						7,
						8,
						9,
						10,
						11,
						12,
						13,
						14,
						15,
						16,
						17,
						18,
						19,
						20
					]}
				/>
			</GridItem>
			<GridItem colSpan={{ base: 12, lg: 3 }} mt={{ lg: '54px' }}>
				<StickyBox offsetTop={30}>
					<Box>
						<CategoryAccordion />
					</Box>
					<Text mt={3} fontSize={'2xl'}>
						Popular Blogs
					</Text>
				</StickyBox>
			</GridItem>
		</Grid>
	);
};

export default Search;
