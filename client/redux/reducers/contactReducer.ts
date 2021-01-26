import { CONTACT } from '../types';

const initialState = {
	emailResponse: {
		success: false
	}
};

const { EMAIL_SENT } = CONTACT;

export const contactReducer = (state = initialState, action: any) => {
	switch (action.type) {
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
