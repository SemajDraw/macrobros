import useSWR from 'swr';
import { BLOG_URLS } from '../constants/urls';

export default function useBlogs(initialData) {
	const { data, error } = useSWR(BLOG_URLS.BLOGS, { initialData: initialData });

	const loading = !data && !error;

	return {
		blogs: data,
		loading,
		error
	};
}
