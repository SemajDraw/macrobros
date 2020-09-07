import {combineReducers} from 'redux';
import auth from './auth';
import errors from './errors';
import messages from './messages';
import blog from './blog';

export default combineReducers({
    auth,
    errors,
    messages,
    blog
});