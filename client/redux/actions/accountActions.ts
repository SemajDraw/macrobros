import axios from 'axios';
import { ACCOUNT, AUTH } from '../types';
import { baseHeaders, tokenAuthHeaders } from '../../hooks/useHeaders';
import { apiUrl } from '../../utils/stringUtils';
import { loadUser } from './authActions';

const {
	EMAIL_VERIFICATION,
	GET_SAVED_BLOGS,
	SAVE_BLOG,
	UPDATE_ACCOUNT
} = ACCOUNT;

const { AUTH_ERROR, CLOSE_ACCOUNT } = AUTH;

export const register = (registerObj: any) => {
	return axios.post(
		apiUrl('/api/account/auth/register'),
		JSON.stringify(registerObj),
		baseHeaders()
	);
};

export const verifyEmail = (token: string) => (dispatch: any) => {
	axios
		.post(apiUrl('/api/account/auth/verify-email'), null, tokenAuthHeaders(token))
		.then((res: any) => {
			dispatch({
				type: EMAIL_VERIFICATION,
				payload: res.data
			});
		})
		.catch();
};

export const passwordResetRequest = (resetReq: any) => {
	return axios.post(
		apiUrl('/api/account/password-reset-request'),
		resetReq,
		baseHeaders()
	);
};

export const passwordReset = (
	user: string,
	token: string,
	password: string,
	password1: string
) => {
	return axios.post(
		apiUrl('/api/account/password-reset'),
		{
			'token': token,
			'password': password,
			'password1': password1
		},
		tokenAuthHeaders(user)
	);
};

export const getSavedBlogs = () => (dispatch: any, getState: any) => {
	axios
		.get(
			apiUrl('/api/account/auth/saved-blogs'),
			tokenAuthHeaders(getState().auth.token)
		)
		.then((res: any) => {
			dispatch({
				type: GET_SAVED_BLOGS,
				payload: res.data
			});
		})
		.catch(() => {
			dispatch({ type: AUTH_ERROR });
		});
};

export const saveBlog = (blogId: string) => (dispatch: any, getState: any) => {
	axios
		.put(
			apiUrl('/api/account/auth/save-blog'),
			{ blogId: blogId },
			tokenAuthHeaders(getState().auth.token)
		)
		.then((res: any) => {
			dispatch({
				type: SAVE_BLOG,
				payload: res.data
			});
		})
		.catch();
};

export const updateAccount = (updateField: any) => (
	dispatch: any,
	getState: any
) => {
	axios
		.put(
			apiUrl('/api/account/auth/update-user'),
			updateField,
			tokenAuthHeaders(getState().auth.token)
		)
		.then((res: any) => {
			if ('closed' in res.data) {
				dispatch({ type: CLOSE_ACCOUNT });
			} else {
				dispatch({ type: UPDATE_ACCOUNT });
				dispatch(loadUser());
			}
		})
		.catch(() => {});
};
