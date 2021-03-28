import Axios, { AxiosResponse } from 'axios';
import { baseHeaders, tokenAuthHeaders } from '../../hooks/useHeaders';
import { apiUrl } from '../../utils/stringUtils';
import { LoginModel } from '../../models/LoginModel';
import { Dispatch } from 'redux';

import { clearAuth, userLoaded, userLoading } from '../slices/AuthSlice';
import { clearAccount } from '../slices/AccountSlice';
import { AUTH } from '../../constants/endpoints';

const { LOAD_USER, LOGIN, LOGOUT } = AUTH;

export const loadUser = () => (dispatch: Dispatch, getState: () => any): void => {
	if (getState().auth.token) {
		dispatch(userLoading());
		Axios.get(apiUrl(LOAD_USER), tokenAuthHeaders(getState().auth.token))
			.then((res: AxiosResponse) => {
				dispatch(userLoaded(res.data));
			})
			.catch(() => {
				dispatch(clearAuth());
			});
	}
};

export const login = (loginReq: LoginModel): Promise<AxiosResponse> => {
	return Axios.post(apiUrl(LOGIN), JSON.stringify(loginReq), baseHeaders());
};

export const logout = () => (dispatch: Dispatch, getState: () => any): void => {
	Axios.post(apiUrl(LOGOUT), null, tokenAuthHeaders(getState().auth.token))
		.then(() => {
			dispatch(clearAuth());
			dispatch(clearAccount());
		})
		.catch(() => null);
};
