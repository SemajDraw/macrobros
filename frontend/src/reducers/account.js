import {EMAIL_VERIFICATION, PASSWORD_RESET} from "../actions/account/types";

const initialState = {
    emailVerification: {
        emailVerified: false,
        message: []
    },
    passwordReset: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case EMAIL_VERIFICATION:
            return {
                ...state,
                emailVerification: action.payload
            };
        case PASSWORD_RESET:
            return {
                ...state,
                passwordReset: action.payload
            }
        default:
            return state
    }
}