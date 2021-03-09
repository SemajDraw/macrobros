import Axios, { AxiosResponse } from 'axios';
import { baseHeaders, tokenAuthHeaders } from '../../hooks/useHeaders';
import { apiUrl } from '../../utils/stringUtils';
import { LoginModel } from '../../models/LoginModel';
import { Dispatch } from 'redux';

import { clearAuth, userLoaded, userLoading } from '../slices/AuthSlice';

export const loadUser = () => (dispatch: Dispatch, getState: () => any): void => {
	if (getState().auth.token) {
		dispatch(userLoading());
		Axios.get(apiUrl('/api/account/auth/user'), tokenAuthHeaders(getState().auth.token))
			.then((res: AxiosResponse) => {
				dispatch(userLoaded(res.data));
			})
			.catch(() => {
				dispatch(clearAuth());
			});
	}
};

export const login = (loginReq: LoginModel): Promise<AxiosResponse> => {
	return Axios.post(
		apiUrl('/api/account/auth/login'),
		JSON.stringify(loginReq),
		baseHeaders()
	);
};

export const logout = () => (dispatch: Dispatch, getState: () => any): void => {
	Axios.post(
		apiUrl('/api/account/auth/logout'),
		null,
		tokenAuthHeaders(getState().auth.token)
	)
		.then(() => {
			dispatch(clearAuth());
		})
		.catch(() => null);
};
