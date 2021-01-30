import { BLOG } from '../types';
import PaginatedBlogModel from '../models/PaginatedBlogModel';
import BlogPostModel from '../models/BlogPostModel';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
	blog: new BlogPostModel(),
	blogCategories: [],
	featuredBlog: new BlogPostModel(),
	popularBlogs: [],
	blogs: new PaginatedBlogModel(),
	categoryBlogs: new PaginatedBlogModel(),
	searchBlogs: {},
	blogClapped: ''
};

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

export const blogReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case HYDRATE:
			return {
				...state,
				...action.payload
			};
		case GET_BLOG:
			return {
				...state,
				blog: action.payload
			};
		case CLAP_BLOG:
			return {
				...state,
				blogClapped: action.payload
			};
		case GET_BLOG_CATEGORIES:
			return {
				...state,
				blogCategories: action.payload
			};
		case GET_BLOGS:
			return {
				...state,
				blogs: action.payload
			};
		case GET_CATEGORY_BLOGS:
			return {
				...state,
				categoryBlogs: action.payload
			};
		case GET_FEATURED_BLOG:
			return {
				...state,
				featuredBlog: action.payload
			};
		case GET_POPULAR_BLOGS:
			return {
				...state,
				popularBlogs: action.payload
			};
		case SEARCH_BLOGS:
			return {
				...state,
				searchBlogs: action.payload
			};
		default:
			return state;
	}
};

export default blogReducer;
