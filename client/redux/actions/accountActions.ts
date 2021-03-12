import Axios, { AxiosResponse } from 'axios';
import { baseHeaders, tokenAuthHeaders } from '../../hooks/useHeaders';
import { apiUrl } from '../../utils/stringUtils';
import { loadUser } from './authActions';
import { Dispatch } from 'redux';
import { clearAuth } from '../slices/AuthSlice';
import { emailVerification, savedBlogs } from '../slices/AccountSlice';
import { RegisterModel } from '../../models/RegisterModel';
import { formSubmitted } from '../slices/FormSubmitSlice';

export const register = (register: RegisterModel): Promise<AxiosResponse> => {
	return Axios.post(
		apiUrl('/api/account/auth/register'),
		JSON.stringify(register),
		baseHeaders()
	);
};

export const verifyEmail = (token: string) => (dispatch: Dispatch): void => {
	Axios.post(apiUrl('/api/account/auth/verify-email'), null, tokenAuthHeaders(token))
		.then((res: AxiosResponse) => dispatch(emailVerification(res.data)))
		.catch(() => null);
};

export const passwordResetRequest = (resetReq: { email: string }) => (
	dispatch: Dispatch
): void => {
	Axios.post(
		apiUrl('/api/account/password-reset-request'),
		resetReq,
		baseHeaders()
	).then((res: AxiosResponse) => dispatch(formSubmitted(res.data.message)));
};

export const passwordReset = (resetRequest: {
	user: string;
	token: string;
	password: string;
	password1: string;
}) => (dispatch: Dispatch): void => {
	Axios.post(
		apiUrl('/api/account/password-reset'),
		{
			'token': resetRequest.token,
			'password': resetRequest.password,
			'password1': resetRequest.password1
		},
		tokenAuthHeaders(resetRequest.user)
	)
		.then((res: AxiosResponse) => dispatch(formSubmitted(res.data.internal)))
		.catch(() =>
			dispatch(
				formSubmitted([
					'Oops something went wrong',
					'It looks like this link has expired. Please attempt to login or reset your password again.'
				])
			)
		);
};

export const getSavedBlogs = () => (dispatch: Dispatch, getState: () => any): void => {
	Axios.get(
		apiUrl('/api/account/auth/saved-blogs'),
		tokenAuthHeaders(getState().auth.token)
	)
		.then((res: AxiosResponse) => dispatch(savedBlogs(res.data)))
		.catch(() => dispatch(clearAuth()));
};

export const saveBlog = (blogId: number) => (
	dispatch: Dispatch,
	getState: () => any
): void => {
	Axios.put(
		apiUrl('/api/account/auth/save-blog'),
		{ blogId: blogId },
		tokenAuthHeaders(getState().auth.token)
	)
		.then()
		.catch(() => null);
};

export const updateAccount = (updateField: Record<string, string>) => (
	dispatch: Dispatch,
	getState: () => any
): void => {
	Axios.put(
		apiUrl('/api/account/auth/update-user'),
		updateField,
		tokenAuthHeaders(getState().auth.token)
	)
		.then((res: AxiosResponse) => {
			if ('closed' in res.data) {
				dispatch(clearAuth());
			} else {
				dispatch<any>(loadUser());
			}
		})
		.catch(() => null);
};
