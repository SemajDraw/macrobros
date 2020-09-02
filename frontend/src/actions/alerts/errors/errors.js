import {GET_ERRORS} from "./types";

export const createError = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: {msg, status}
    };
};