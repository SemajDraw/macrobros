import { LOADING } from '../types';

const { SHOW_LOADER, HIDE_LOADER } = LOADING;

export const showLoader = () => (dispatch: any) => {
	dispatch({
		type: SHOW_LOADER
	});
};

export const hideLoader = () => (dispatch: any) => {
	dispatch({
		type: HIDE_LOADER
	});
};
