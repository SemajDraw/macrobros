import { Blog } from '../../models/Blog';
import { PaginatedBlog } from '../../models/PaginatedBlog';
import { PopularBlog } from '../../models/PopularBlog';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from '../RootReducer';
import { BlogMin } from '../../models/BlogMin';

interface BlogState {
	blog: Blog;
	blogs: PaginatedBlog;
	blogCategories: string[];
	categoryBlogs: PaginatedBlog;
	featuredBlog: BlogMin;
	popularBlogsMin: PopularBlog[];
	popularBlogs: BlogMin[];
	searchBlogs: PaginatedBlog;
}

const slice = createSlice({
	name: 'blog',
	initialState: {
		blog: {} as Blog,
		blogCategories: [],
		featuredBlog: {} as Blog,
		popularBlogsMin: [],
		popularBlogs: [] as BlogMin[],
		blogs: {
			totalItems: 0,
			totalPages: 0,
			pageNumber: 0,
			nextPageNumber: 0,
			previousPageNumber: 0,
			results: []
		},
		categoryBlogs: {
			totalItems: 0,
			totalPages: 0,
			pageNumber: 0,
			nextPageNumber: 0,
			previousPageNumber: 0,
			results: []
		},
		searchBlogs: {
			totalItems: 0,
			totalPages: 0,
			pageNumber: 0,
			nextPageNumber: 0,
			previousPageNumber: 0,
			results: []
		}
	} as BlogState,
	reducers: {
		updateBlog(state, { payload }: PayloadAction<Blog>) {
			state.blog = payload;
		},
		updateFeaturedBlog(state, { payload }: PayloadAction<BlogMin>) {
			state.featuredBlog = payload;
		},
		updateBlogs(state, { payload }: PayloadAction<PaginatedBlog>) {
			state.blogs = payload;
		},
		updateCategoryBlogs(state, { payload }: PayloadAction<PaginatedBlog>) {
			state.categoryBlogs = payload;
		},
		updatePopularBlogsMin(state, { payload }: PayloadAction<PopularBlog[]>) {
			state.popularBlogsMin = payload;
		},
		updatePopularBlogs(state, { payload }: PayloadAction<BlogMin[]>) {
			state.popularBlogs = payload;
		},
		updateSearchBlogs(state, { payload }: PayloadAction<PaginatedBlog>) {
			state.searchBlogs = payload;
		},
		updateBlogCategories(state, { payload }: PayloadAction<string[]>) {
			state.blogCategories = payload;
		}
	}
});

export const blogReducer = slice.reducer;

export const {
	updateBlog,
	updateFeaturedBlog,
	updateBlogCategories,
	updateBlogs,
	updateCategoryBlogs,
	updatePopularBlogsMin,
	updatePopularBlogs,
	updateSearchBlogs
} = slice.actions;

const selectBlog = (state: State): Blog => state.blog.blog;
const selectBlogs = (state: State): PaginatedBlog => state.blog.blogs;
const selectFeaturedBlog = (state: State): BlogMin => state.blog.featuredBlog;
const selectSearchBlogs = (state: State): PaginatedBlog => state.blog.searchBlogs;
const selectCategoryBlogs = (state: State): PaginatedBlog => state.blog.categoryBlogs;
const selectPopularBlogsMin = (state: State): PopularBlog[] => state.blog.popularBlogsMin;
const selectPopularBlogs = (state: State): BlogMin[] => state.blog.popularBlogs;

export const blogSelector = createSelector([selectBlog], (selectBlog) => selectBlog);
export const blogsSelector = createSelector([selectBlogs], (selectBlogs) => selectBlogs);
export const popularBlogMinSelector = createSelector(
	[selectPopularBlogsMin],
	(selectPopularBlogs) => selectPopularBlogs
);
export const popularBlogsSelector = createSelector(
	[selectPopularBlogs],
	(selectPopularBlogs) => selectPopularBlogs
);
export const featuredBlogSelector = createSelector(
	[selectFeaturedBlog],
	(selectFeaturedBlog) => selectFeaturedBlog
);
export const searchBlogsSelector = createSelector(
	[selectSearchBlogs],
	(selectSearchBlogs) => selectSearchBlogs
);
export const categoryBlogsSelector = createSelector(
	[selectCategoryBlogs],
	(selectCategoryBlogs) => selectCategoryBlogs
);
