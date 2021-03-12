import { PaginatedBlog } from '../../models/PaginatedBlog';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from '../RootReducer';
import { BlogMin } from '../../models/BlogMin';

interface EmailVerification {
	emailVerified: boolean;
	message: string[];
}

interface AccountState {
	emailVerification: EmailVerification;
	passwordReset: string[];
	savedBlogs: PaginatedBlog;
}

const slice = createSlice({
	name: 'account',
	initialState: {
		emailVerification: {
			emailVerified: false,
			message: []
		},
		passwordReset: [],
		savedBlogs: {
			totalItems: 0,
			totalPages: 0,
			pageNumber: 0,
			nextPageNumber: 0,
			previousPageNumber: 0,
			results: []
		}
	} as AccountState,
	reducers: {
		emailVerification(state, { payload }: PayloadAction<EmailVerification>) {
			state.emailVerification = payload;
		},
		passwordReset(state, { payload }: PayloadAction<string[]>) {
			state.passwordReset = payload;
		},
		savedBlogs(state, { payload }: PayloadAction<PaginatedBlog>) {
			state.savedBlogs = payload;
		},
		clearAccount(state) {
			state.emailVerification = {
				emailVerified: false,
				message: []
			};
			state.passwordReset = [];
			state.savedBlogs = {
				totalItems: 0,
				totalPages: 0,
				pageNumber: 0,
				nextPageNumber: 0,
				previousPageNumber: 0,
				results: []
			};
		}
	}
});

export const accountReducer = slice.reducer;

export const { clearAccount, emailVerification, passwordReset, savedBlogs } = slice.actions;

const selectSavedBlogs = (state: State) => state.account.savedBlogs;
const selectEmailVerification = (state: State) => state.account.emailVerification;

export const savedBlogsSelector = createSelector(
	[selectSavedBlogs],
	(selectSavedBlogs) => selectSavedBlogs
);

export const emailVerificationSelector = createSelector(
	[selectEmailVerification],
	(selectEmailVerification) => selectEmailVerification
);
