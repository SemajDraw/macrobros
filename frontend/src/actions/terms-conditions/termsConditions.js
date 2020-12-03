import axios from "axios";
import {GET_PRIVACY_POLICY, GET_TERMS_OF_SERVICE} from "./types";

export const getPrivacyPolicy = () => (dispatch) => {
    axios.get('/api/terms-conditions/privacy-policy')
        .then(res => {
            dispatch({
                type: GET_PRIVACY_POLICY,
                payload: res.data
            })
        }).catch();
};

export const getTermsService = () => (dispatch) => {
    axios.get('/api/terms-conditions/terms-service')
        .then(res => {
            dispatch({
                type: GET_TERMS_OF_SERVICE,
                payload: res.data
            })
        }).catch();
};