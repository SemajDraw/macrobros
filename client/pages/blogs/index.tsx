import React from 'react';
import { BLOG } from '../../constants/endpoints';
import Blogs from '../../components/Blog/Blogs';
import MetaInfo from '../../components/shared/MetaInfo';
import fetcher from '../../lib/fetcher';

export const Index = ({ blogs }) => {
	return (
		<>
			<MetaInfo
				title='MacroBros - Blogs'
				description='Welcome to MacroBros blog. From here you can search for a particular topic of interest, choose from one of our categories or possibly read one of our top blog posts as voted by our users'
			/>
			<Blogs initialData={blogs} />
		</>
	);
};

export async function getStaticProps() {
	const blogs = await fetcher(BLOG.BLOGS);
	return { props: { blogs } };
}
export default Index;
