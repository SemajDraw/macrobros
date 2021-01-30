import authReducer from './authReducer';
import blogReducer from './blogReducer';
import contactReducer from './contactReducer';
import accountReducer from './accountReducer';
import loadingReducer from './loadingReducer';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth', 'blog']
};

const rootReducer = combineReducers({
	account: accountReducer,
	auth: authReducer,
	blog: blogReducer,
	contact: contactReducer,
	loading: loadingReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export { persistedReducer, rootReducer};
