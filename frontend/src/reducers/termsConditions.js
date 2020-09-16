import {GET_PRIVACY_POLICY, GET_TERMS_OF_SERVICE} from "../actions/terms-conditions/types";

const initialState = {
    privacyPolicy: {},
    termsService: {},
};

export default function (state = initialState, action) {
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
            return state
    }
}