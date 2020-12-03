import { combineReducers } from 'redux';
import auth from './auth';
import blog from './blog';
import termsConditions from './termsConditions';
import contact from './contact';
import account from "./account";

export default combineReducers({
    account,
    auth,
    blog,
    contact,
    termsConditions
});