import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { authReducer } from './slices/AuthSlice';
import { formSubmitReducer } from './slices/FormSubmitSlice';
import { loadingReducer } from './slices/LoadingSlice';
import { accountReducer } from './slices/AccountSlice';
import { blogReducer } from './slices/BlogSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['account', 'auth', 'blog', 'formSubmit']
};

const rootReducer = combineReducers({
	account: accountReducer,
	auth: authReducer,
	blog: blogReducer,
	formSubmit: formSubmitReducer,
	loading: loadingReducer
});

export type State = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export { persistedReducer, rootReducer };
