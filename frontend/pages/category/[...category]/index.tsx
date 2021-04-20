import React, { FC, useEffect, useState } from 'react';
import { Divider, Grid, GridItem, Text } from '@chakra-ui/layout';
import { BlogGrid } from '../../../components/Blog/BlogGrid/BlogGrid';
import StickyBox from 'react-sticky-box';
import { Flex } from '@chakra-ui/react';
import { Pagination } from '../../../components/shared/Pagination/Pagination';
import { BLOG } from '../../../constants/routes';
import { formatSlug, paginateUrl } from '../../../utils/stringUtils';
import { SideBar } from '../../../components/SideBar/SideBar';
import { MetaInfo } from '../../../components/shared/MetaInfo';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { PaginatedBlog } from '../../../models/PaginatedBlog';
import { fetcher } from '../../../library/fetcher';

export const Index: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
	blogs,
	cat
}) => {
	const [query, setQuery] = useState('');
	const formattedSlug = formatSlug(query);

	useEffect(() => {
		setQuery(cat);
	}, [cat]);

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
					<Text ml={1} mb={2} fontWeight={'normal'}>
						{blogs.totalItems} results found
					</Text>
					<BlogGrid blogs={blogs.results} />
				</GridItem>
				<GridItem colSpan={{ base: 12, lg: 3 }} mt={{ lg: '54px' }}>
					<StickyBox offsetTop={30}>
						<SideBar />
					</StickyBox>
				</GridItem>
				<GridItem colSpan={12}>
					<Flex justifyContent={'center'}>
						<Pagination blogs={blogs} url={BLOG.CATEGORY} query={query} />
					</Flex>
				</GridItem>
			</Grid>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { category } = context.query;
	const [cat, page] = category as string[];
	const url: string =
		process.env.NODE_ENV !== 'production'
			? 'http://localhost:8000/api/blog/category'
			: 'http://macrobros-api:8000/api/blog/category';
	const blogs: PaginatedBlog = await fetcher(paginateUrl(url, page), {
		method: 'post',
		body: JSON.stringify({ category: cat }),
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	});
	return { props: { blogs, cat } };
};

export default Index;
