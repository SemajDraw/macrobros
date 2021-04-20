import React, { FC, memo, useEffect, useState } from 'react';
import { Box, Divider, Grid, GridItem, Text } from '@chakra-ui/layout';
import { BlogGrid } from '../../../components/Blog/BlogGrid/BlogGrid';
import StickyBox from 'react-sticky-box';
import SearchBar from '../../../components/shared/SearchBar';
import { CategoryAccordion } from '../../../components/SideBar/CategoryAccordion';
import { PopularBlogs } from '../../../components/SideBar/PopularBlogs';
import { Pagination } from '../../../components/shared/Pagination/Pagination';
import { Flex } from '@chakra-ui/react';
import { BLOG } from '../../../constants/routes';
import { MetaInfo } from '../../../components/shared/MetaInfo';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { PaginatedBlog } from '../../../models/PaginatedBlog';
import { fetcher } from '../../../library/fetcher';
import { paginateUrl } from '../../../utils/stringUtils';

export const Search: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
	blogs,
	search
}) => {
	const [searched, setSearch] = useState('');

	useEffect(() => {
		setSearch(search);
	}, [blogs]);

	return (
		<>
			<MetaInfo
				title={`MacroBros - ${searched}`}
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
					<Text ml={1} mb={2} fontWeight={'normal'}>
						{blogs.totalItems} results found
					</Text>
					<BlogGrid blogs={blogs.results} />
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
						<Pagination blogs={blogs} url={BLOG.SEARCH} query={searched} />
					</Flex>
				</GridItem>
			</Grid>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { query } = context.query;
	const [search, page] = query as string[];
	const url: string =
		process.env.NODE_ENV !== 'production'
			? 'http://localhost:8000/api/blog/search'
			: 'http://macrobros-api:8000/api/blog/search';

	const blogs: PaginatedBlog = await fetcher(paginateUrl(url, page), {
		method: 'post',
		body: JSON.stringify({ search: search }),
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	});
	return { props: { blogs, search } };
};

export default memo(Search);
