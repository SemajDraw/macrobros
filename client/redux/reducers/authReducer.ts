import { HYDRATE } from 'next-redux-wrapper';
import { AUTH } from '../types';

const initialState = {
	token: '',
	isAuthenticated: false,
	isLoading: false,
	user: null
};

const {
	AUTH_ERROR,
	CLOSE_ACCOUNT,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT_SUCCESS,
	REGISTER_FAIL,
	REGISTER_SUCCESS,
	USER_LOADED,
	USER_LOADING
} = AUTH;

export const authReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case HYDRATE:
			return {
				...state,
				...action.payload
			};
		case USER_LOADING:
			return {
				...state,
				isLoading: true
			};
		case USER_LOADED:
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				isLoading: false
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				isLoading: false
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				...action.payload,
				isAuthenticated: false,
				isLoading: false
			};
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT_SUCCESS:
		case REGISTER_FAIL:
		case CLOSE_ACCOUNT:
			return {
				...state,
				token: null,
				user: null,
				isAuthenticated: false,
				isLoading: false
			};
		default:
			return state;
	}
};

export default authReducer;
