import useSWR from 'swr';
import { BLOG } from '../constants/endpoints';

export default function useBlogs(initialData: any) {
	const { data, error } = useSWR(BLOG.BLOGS, { initialData: initialData });

	const loading = !data && !error;

	return {
		blogs: data,
		loading,
		error
	};
}
