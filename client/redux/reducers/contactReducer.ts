import { CONTACT } from '../types';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
	emailResponse: {
		success: false
	}
};

const { EMAIL_SENT } = CONTACT;

export const contactReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case HYDRATE:
			return {
				...state,
				...action.payload
			};
		case EMAIL_SENT:
			return {
				...state,
				emailResponse: action.payload
			};
		default:
			return state;
	}
};

export default contactReducer;
