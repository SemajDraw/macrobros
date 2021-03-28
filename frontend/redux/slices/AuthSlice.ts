import { User } from '../../models/User';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
	token: string;
	isAuthenticated: boolean;
	isLoading: boolean;
	user: User;
}

const slice = createSlice({
	name: 'auth',
	initialState: {
		token: '',
		isAuthenticated: false,
		isLoading: false,
		user: { firstName: '', lastName: '', isSubscribed: false }
	} as AuthState,
	reducers: {
		userLoading(state) {
			state.isLoading = true;
		},
		userLoaded(state, { payload: { user } }: PayloadAction<{ user: User }>) {
			state.user = user;
			state.isAuthenticated = true;
			state.isLoading = false;
		},
		loginSuccess(
			state,
			{ payload: { token, user } }: PayloadAction<{ token: string; user: User }>
		) {
			state.token = token;
			state.user = user;
			state.isAuthenticated = true;
			state.isLoading = false;
		},
		clearAuth(state) {
			state.token = '';
			state.user = { firstName: '', lastName: '', isSubscribed: false };
			state.isAuthenticated = false;
			state.isLoading = false;
		}
	}
});

export const authReducer = slice.reducer;

export const { userLoaded, userLoading, loginSuccess, clearAuth } = slice.actions;
