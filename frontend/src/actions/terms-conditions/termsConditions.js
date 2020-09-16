import axios from "axios";
import {createError} from "../alerts/errors/errors";
import {GET_PRIVACY_POLICY, GET_TERMS_OF_SERVICE} from "./types";

export const getPrivacyPolicy = () => (dispatch) => {
    console.log('getting privaacy policy')
    axios.get('/api/terms-conditions/privacy-policy')
        .then(res => {
            console.log('privacy policy', res.data);
            dispatch({
                type: GET_PRIVACY_POLICY,
                payload: res.data
            })
        }).catch(err => dispatch(createError(err.response.data, err.response.status)));
};

export const getTermsService = () => (dispatch) => {
    axios.get('/api/terms-conditions/terms-service')
        .then(res => {
            dispatch({
                type: GET_TERMS_OF_SERVICE,
                payload: res.data
            })
        }).catch(err => dispatch(createError(err.response.data, err.response.status)));
};