import React, { FC } from 'react';
import Home from '../components/Home/Home';
import { BLOG } from '../constants/endpoints';
import { fetcher } from '../lib/fetcher';
import { MetaInfo } from '../components/shared/MetaInfo';
import { PaginatedBlogs } from '../models/PaginatedBlogs';
import { GetStaticProps } from 'next';

export interface HomeProps {
	blogs: PaginatedBlogs;
}

export const Index: FC<HomeProps> = (props) => {
	return (
		<>
			<MetaInfo
				title={'MacroBros'}
				description={
					'This is the MacroBros blog website, where 2 brothers discuss macroeconomic topics with a focus on wealth preservation, cryptocurrencies, stocks and much more.'
				}
			/>
			<Home {...props} />
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const blogs: PaginatedBlogs = await fetcher(BLOG.BLOGS);

	return { props: { blogs } };
};

export default Index;
