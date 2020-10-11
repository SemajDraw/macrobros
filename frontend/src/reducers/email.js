import {
    EMAIL_VERIFICATION
} from '../actions/email/types';

const initialState = {
    emailVerification: {
        emailVerified: false,
        message: []
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case EMAIL_VERIFICATION:
            return {
                ...state,
                emailVerification: action.payload
            };
        default:
            return state
    }
}