import axios from 'axios';
import { GET_PRIVACY_POLICY, GET_TERMS_OF_SERVICE } from './types';
import { baseHeaders } from '../headers';

export const getPrivacyPolicy = () => (dispatch) => {
	axios
		.get('/api/terms-conditions/privacy-policy', baseHeaders())
		.then((res) => {
			dispatch({
				type: GET_PRIVACY_POLICY,
				payload: res.data
			});
		})
		.catch();
};

export const getTermsService = () => (dispatch) => {
	axios
		.get('/api/terms-conditions/terms-service', baseHeaders())
		.then((res) => {
			dispatch({
				type: GET_TERMS_OF_SERVICE,
				payload: res.data
			});
		})
		.catch();
};
