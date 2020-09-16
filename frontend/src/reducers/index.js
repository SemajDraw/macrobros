import {combineReducers} from 'redux';
import auth from './auth';
import errors from './errors';
import messages from './messages';
import blog from './blog';
import termsConditions from "./termsConditions";

export default combineReducers({
    auth,
    errors,
    messages,
    blog,
    termsConditions
});