import axios from 'axios';
import { baseHeaders } from '../hooks/useHeaders';

export const getBlog = (slug) => {
	axios
		.get(`/api/blog/${slug}`, baseHeaders())
		.then((res) => {})
		.catch();
};

export const getBlogCategories = () => {
	axios
		.get('/api/blog/categories', baseHeaders())
		.then((res) => {})
		.catch((error) => {});
};

export const getFeaturedBlog = () => {
	axios
		.get('/api/blog/featured', baseHeaders())
		.then((res) => {})
		.catch((error) => {});
};

export const getPopularBlogs = () => {
	axios
		.get('/api/blog/popular', baseHeaders())
		.then((res) => {})
		.catch((error) => {});
};

export const getBlogs = async (pageNumber) => {
	const data = await axios.get('http://localhost:8000/api/blog/', baseHeaders());
	return data;
};

export const getCategoryBlogs = (category, pageNumber) => {
	axios
		.post(
			paginationUrl('/api/blog/category', pageNumber),
			{ category: category },
			baseHeaders()
		)
		.then((res) => {})
		.catch((error) => {});
};

export const getSearchBlogs = (search, pageNumber) => {
	axios
		.post(
			paginationUrl('/api/blog/search', pageNumber),
			{ search: search },
			baseHeaders()
		)
		.then((res) => {})
		.catch((error) => {});
};

export const clapBlog = (blogId) => {
	axios
		.put('/api/blog/add-clap', { blogId: blogId }, baseHeaders())
		.then((res) => {})
		.catch((error) => {});
};

const paginationUrl = (url, pageNumber) => {
	url = `http://localhost:8000${url}`;
	return pageNumber === undefined ? url : `${url}?page=${pageNumber}`;
};
