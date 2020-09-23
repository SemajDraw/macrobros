import {combineReducers} from 'redux';
import auth from './auth';
import errors from './errors';
import messages from './messages';
import blog from './blog';
import termsConditions from "./termsConditions";
import contact from "./contact";

export default combineReducers({
    auth,
    blog,
    contact,
    errors,
    messages,
    termsConditions
});