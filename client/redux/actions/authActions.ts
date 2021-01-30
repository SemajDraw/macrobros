import axios from 'axios';
import { AUTH } from '../types';
import { baseHeaders, tokenAuthHeaders } from '../../hooks/useHeaders';
import { BASE_URL } from '../../constants/endpoints';

const { AUTH_ERROR, LOGOUT_SUCCESS, USER_LOADED, USER_LOADING } = AUTH;

export const loadUser = () => (dispatch: any, getState: any) => {
	// Initialize User Load
	dispatch({ type: USER_LOADING });

	if (getState().auth.token) {
		axios
			.get(
				`${BASE_URL}/api/account/auth/user`,
				tokenAuthHeaders(getState().auth.token)
			)
			.then((res: any) => {
				dispatch({
					type: USER_LOADED,
					payload: res.data
				});
			})
			.catch(() => {
				dispatch({ type: AUTH_ERROR });
			});
	}
};

export const login = (loginReq: any) => {
	return axios.post(
		`${BASE_URL}/api/account/auth/login`,
		JSON.stringify(loginReq),
		baseHeaders()
	);
};

export const logout = () => (dispatch: any, getState: any) => {
	axios
		.post(
			`${BASE_URL}/api/account/auth/logout`,
			null,
			tokenAuthHeaders(getState().auth.token)
		)
		.then(() => {
			dispatch({
				type: LOGOUT_SUCCESS
			});
		})
		.catch();
};
