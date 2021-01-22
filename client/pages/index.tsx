import React from 'react';
import Home from '../components/Home/Home';
import { BLOG_URLS } from '../constants/urls';
import fetcher from '../lib/fetcher';
import MetaInfo from '../components/shared/MetaInfo';

export const Index = ({ blogs }) => {
	return (
		<>
			<MetaInfo
				title={'MacroBros'}
				description={
					'This is the MacroBros blog website, where 2 brothers discuss macroeconomic topics with a focus on wealth preservation, cryptocurrencies, stocks and much more.'
				}
			/>
			<Home initialData={blogs} />
		</>
	);
};

export async function getStaticProps() {
	const blogs = await fetcher(BLOG_URLS.BLOGS);
	return { props: { blogs } };
}

export default Index;
