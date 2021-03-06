import { PaginatedBlog } from '../../models/PaginatedBlog';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
		savedBlogs: {} as PaginatedBlog
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
		}
	}
});

export const accountReducer = slice.reducer;

export const { emailVerification, passwordReset, savedBlogs } = slice.actions;
