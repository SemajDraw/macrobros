import axios from 'axios';
import { BLOG } from '../types';
import { baseHeaders } from '../../hooks/useHeaders';

const {
	CLAP_BLOG,
	GET_BLOG,
	GET_BLOG_CATEGORIES,
	GET_BLOGS,
	GET_CATEGORY_BLOGS,
	GET_FEATURED_BLOG,
	GET_POPULAR_BLOGS,
	SEARCH_BLOGS
} = BLOG;

export const getBlog = (slug) => (dispatch) => {
	axios
		.get(`/api/blog/${slug}`, baseHeaders())
		.then((res) => {
			dispatch({
				type: GET_BLOG,
				payload: res.data
			});
		})
		.catch();
};

export const getBlogCategories = () => (dispatch) => {
	axios
		.get('/api/blog/categories', baseHeaders())
		.then((res) => {
			dispatch({
				type: GET_BLOG_CATEGORIES,
				payload: res.data
			});
		})
		.catch();
};

export const getFeaturedBlog = () => (dispatch) => {
	axios
		.get('/api/blog/featured', baseHeaders())
		.then((res) => {
			dispatch({
				type: GET_FEATURED_BLOG,
				payload: res.data[0]
			});
		})
		.catch();
};

export const getPopularBlogs = () => (dispatch) => {
	axios
		.get('/api/blog/popular', baseHeaders())
		.then((res) => {
			dispatch({
				type: GET_POPULAR_BLOGS,
				payload: res.data
			});
		})
		.catch();
};

export const getBlogs = (pageNumber) => (dispatch) => {
	let url;
	pageNumber === undefined
		? (url = '/api/blog/')
		: (url = '/api/blog/?page='.concat(pageNumber));
	axios
		.get(url, baseHeaders())
		.then((res) => {
			dispatch({
				type: GET_BLOGS,
				payload: res.data
			});
		})
		.catch();
};

export const getCategoryBlogs = (category, pageNumber) => (dispatch) => {
	let url;
	pageNumber === undefined
		? (url = '/api/blog/category')
		: (url = '/api/blog/category?page='.concat(pageNumber));
	axios
		.post(url, { category: category }, baseHeaders())
		.then((res) => {
			dispatch({
				type: GET_CATEGORY_BLOGS,
				payload: res.data
			});
		})
		.catch();
};

export const getSearchBlogs = (search, pageNumber) => (dispatch) => {
	let url;
	pageNumber === undefined
		? (url = '/api/blog/search')
		: (url = '/api/blog/search?page='.concat(pageNumber));
	axios
		.post(url, { search: search }, baseHeaders())
		.then((res) => {
			dispatch({
				type: SEARCH_BLOGS,
				payload: res.data
			});
		})
		.catch();
};

export const clapBlog = (blogId) => (dispatch) => {
	axios
		.put('/api/blog/add-clap', { blogId: blogId }, baseHeaders())
		.then((res) => {
			dispatch({
				type: CLAP_BLOG,
				payload: res.data
			});
		})
		.catch();
};
