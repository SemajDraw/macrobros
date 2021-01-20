import React from 'react';
import Home from '../components/Home/Home';
import { BLOG_URLS } from '../constants/urls';
import fetcher from '../lib/fetcher';

export const Index = ({ blogs }) => {
	return <Home initialData={blogs} />;
};

export async function getServerSideProps() {
	const blogs = await fetcher(BLOG_URLS.BLOGS);
	return { props: { blogs } };
}

export default Index;
