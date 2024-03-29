import Axios, { AxiosResponse } from 'axios';
import { baseHeaders } from '../../hooks/useHeaders';
import { apiUrl, paginateUrl } from '../../utils/stringUtils';
import { BLOG, SEARCH } from '../../constants/endpoints';
import {
	updateBlog,
	updateBlogCategories,
	updateBlogs,
	updateCategoryBlogs,
	updateFeaturedBlog,
	updatePopularBlogs,
	updatePopularBlogsMin,
	updateSearchBlogs
} from '../slices/BlogSlice';
import { Dispatch } from 'redux';

export const getBlog = (slug: string) => (dispatch: Dispatch): void => {
	Axios.get(apiUrl(`/api/blog/${slug}`), baseHeaders())
		.then((res: AxiosResponse) => {
			dispatch(updateBlog(res.data));
		})
		.catch(() => null);
};

export const getBlogCategories = () => (dispatch: Dispatch): void => {
	Axios.get(BLOG.CATEGORIES, baseHeaders())
		.then((res: AxiosResponse) => {
			dispatch(updateBlogCategories(res.data));
		})
		.catch(() => null);
};

export const getFeaturedBlog = () => (dispatch: Dispatch): void => {
	Axios.get(BLOG.FEATURED, baseHeaders())
		.then((res: AxiosResponse) => {
			dispatch(updateFeaturedBlog(res.data[0]));
		})
		.catch(() => null);
};

export const getPopularBlogsMin = () => (dispatch: Dispatch): void => {
	Axios.get(BLOG.POPULAR_MIN, baseHeaders())
		.then((res: AxiosResponse) => {
			dispatch(updatePopularBlogsMin(res.data));
		})
		.catch(() => null);
};

export const getPopularBlogs = () => (dispatch: Dispatch): void => {
	Axios.get(BLOG.POPULAR, baseHeaders())
		.then((res: AxiosResponse) => {
			dispatch(updatePopularBlogs(res.data));
		})
		.catch(() => null);
};

export const getBlogs = (pageNumber: string) => (dispatch: Dispatch): void => {
	Axios.get(paginateUrl(BLOG.BLOGS, pageNumber), baseHeaders())
		.then((res: AxiosResponse) => {
			dispatch(updateBlogs(res.data));
		})
		.catch(() => null);
};

export const getCategoryBlogs = (
	category: string,
	pageNumber?: number | string | undefined
) => (dispatch: Dispatch): void => {
	Axios.post(paginateUrl(BLOG.CATEGORY, pageNumber), { category: category }, baseHeaders())
		.then((res: AxiosResponse) => {
			dispatch(updateCategoryBlogs(res.data));
		})
		.catch(() => null);
};

export const getSearchBlogs = (
	search: string,
	pageNumber?: number | string | undefined
) => (dispatch: Dispatch): void => {
	Axios.post(paginateUrl(SEARCH.BLOGS, pageNumber), { search: search }, baseHeaders())
		.then((res: AxiosResponse) => {
			dispatch(updateSearchBlogs(res.data));
		})
		.catch(() => null);
};

export const clapBlog = (blogId: string): void => {
	Axios.put(BLOG.ADD_CLAP, { blogId: blogId }, baseHeaders()).catch(() => null);
};
