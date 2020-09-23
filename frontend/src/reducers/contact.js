import {EMAIL_SENT} from "../actions/contact/types";

const initialState = {
    emailResponse: {
        success: false
    },
};

export default function (state = initialState, action) {
    switch (action.type) {
        case EMAIL_SENT:
            return {
                ...state,
                emailResponse: action.payload
            };
        default:
            return state
    }
}