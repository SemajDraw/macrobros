import { ACCOUNT } from '../types';
import PaginatedBlogModel from '../models/PaginatedBlogModel';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
	emailVerification: {
		emailVerified: false,
		message: []
	},
	passwordReset: null,
	savedBlogs: new PaginatedBlogModel(),
	saveBlog: ''
};

const {
	EMAIL_VERIFICATION,
	GET_SAVED_BLOGS,
	PASSWORD_RESET,
	SAVE_BLOG,
	UPDATE_ACCOUNT
} = ACCOUNT;

export const accountReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case HYDRATE:
			return {
				...state,
				...action.payload
			};
		case EMAIL_VERIFICATION:
			return {
				...state,
				emailVerification: action.payload
			};
		case PASSWORD_RESET:
			return {
				...state,
				passwordReset: action.payload
			};
		case GET_SAVED_BLOGS:
			return {
				...state,
				savedBlogs: action.payload
			};
		case SAVE_BLOG:
			return {
				...state,
				saveBlog: action.payload
			};
		case UPDATE_ACCOUNT:
			return {
				...state
			};
		default:
			return state;
	}
};

export default accountReducer;
