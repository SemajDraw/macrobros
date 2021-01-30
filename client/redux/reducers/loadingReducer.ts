import { LOADING } from '../types';
import { HYDRATE } from 'next-redux-wrapper';

const { SHOW_LOADER, HIDE_LOADER } = LOADING;

const initialState = {
	isLoading: false
};

export const loadingReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case HYDRATE:
			return {
				...state,
				...action.payload
			};
		case SHOW_LOADER:
			return {
				...state,
				isLoading: true
			};
		case HIDE_LOADER:
			return {
				...state,
				isLoading: false
			};
		default:
			return state;
	}
};

export default loadingReducer;
