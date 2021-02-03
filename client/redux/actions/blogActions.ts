import axios from 'axios';
import { BLOG as BlogTypes } from '../types';
import { baseHeaders } from '../../hooks/useHeaders';
import { apiUrl, paginateUrl } from '../../utils/stringUtils';
import { BLOG, SEARCH } from '../../constants/endpoints';

const {
	CLAP_BLOG,
	GET_BLOG,
	GET_BLOG_CATEGORIES,
	GET_BLOGS,
	GET_CATEGORY_BLOGS,
	GET_FEATURED_BLOG,
	GET_POPULAR_BLOGS,
	SEARCH_BLOGS
} = BlogTypes;

export const getBlog = (slug: string) => (dispatch: any) => {
	axios
		.get(apiUrl(`/api/blog/${slug}`), baseHeaders())
		.then((res) => {
			dispatch({
				type: GET_BLOG,
				payload: res.data
			});
		})
		.catch();
};

export const getBlogCategories = () => (dispatch: any) => {
	axios
		.get(BLOG.CATEGORIES, baseHeaders())
		.then((res) => {
			dispatch({
				type: GET_BLOG_CATEGORIES,
				payload: res.data
			});
		})
		.catch();
};

export const getFeaturedBlog = () => (dispatch: any) => {
	axios
		.get(BLOG.FEATURED, baseHeaders())
		.then((res) => {
			dispatch({
				type: GET_FEATURED_BLOG,
				payload: res.data[0]
			});
		})
		.catch();
};

export const getPopularBlogs = () => (dispatch: any) => {
	axios
		.get(BLOG.POPULAR, baseHeaders())
		.then((res) => {
			dispatch({
				type: GET_POPULAR_BLOGS,
				payload: res.data
			});
		})
		.catch();
};

export const getBlogs = (pageNumber) => (dispatch: any) => {
	axios
		.get(paginateUrl(BLOG.BLOGS, pageNumber), baseHeaders())
		.then((res) => {
			dispatch({
				type: GET_BLOGS,
				payload: res.data
			});
		})
		.catch((e) => console.log('error', e.response.data));
};

export const getCategoryBlogs = (category, pageNumber) => (dispatch: any) => {
	axios
		.post(
			paginateUrl(BLOG.CATEGORY, pageNumber),
			{ category: category },
			baseHeaders()
		)
		.then((res) => {
			dispatch({
				type: GET_CATEGORY_BLOGS,
				payload: res.data
			});
		})
		.catch();
};

export const getSearchBlogs = (search, pageNumber?) => (dispatch: any) => {
	axios
		.post(
			paginateUrl(SEARCH.BLOGS, pageNumber),
			{ search: search },
			baseHeaders()
		)
		.then((res) => {
			dispatch({
				type: SEARCH_BLOGS,
				payload: res.data
			});
		})
		.catch();
};

export const clapBlog = (blogId: string) => (dispatch: any) => {
	axios
		.put(BLOG.ADD_CLAP, { blogId: blogId }, baseHeaders())
		.then((res) => {
			dispatch({
				type: CLAP_BLOG,
				payload: res.data
			});
		})
		.catch();
};
