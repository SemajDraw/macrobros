import { TERMS_CONDITIONS } from '../types';

const initialState = {
	privacyPolicy: {},
	termsService: {}
};

const {
	GET_PRIVACY_POLICY,
	GET_TERMS_OF_SERVICE
} = TERMS_CONDITIONS;

export const termsConditions = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRIVACY_POLICY:
			return {
				...state,
				privacyPolicy: action.payload
			};
		case GET_TERMS_OF_SERVICE:
			return {
				...state,
				termsService: action.payload
			};
		default:
			return state;
	}
};

export default termsConditions;
