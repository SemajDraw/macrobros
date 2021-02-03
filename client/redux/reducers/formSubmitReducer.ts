import { FORM_SUBMIT } from '../types';

const initialState = {
	header: '',
	body: ''
};

const { FORM_SUBMITTED } = FORM_SUBMIT;

export const formSubmitReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case FORM_SUBMITTED:
			return {
				...state,
				header: action.payload[0],
				body: action.payload[1]
			};
		default:
			return state;
	}
};

export default formSubmitReducer;
