import React from 'react';
import Home from '../components/Home/Home';
import { BLOG } from '../constants/endpoints';
import fetcher from '../lib/fetcher';
import MetaInfo from '../components/shared/MetaInfo';

export const Index = (props) => {
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

export async function getStaticProps() {
	const blogs = await fetcher(BLOG.BLOGS);
	const categories = await fetcher(BLOG.CATEGORIES);

	return { props: { blogs, categories } };
}

export default Index;
