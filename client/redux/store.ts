import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistedReducer, rootReducer } from './reducers/rootReducer';
import { createWrapper } from 'next-redux-wrapper';
import { persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';

const bindMiddleware = (middleware: any) => {
	if (process.env.ENV !== 'prod') {
		return composeWithDevTools(applyMiddleware(...middleware));
	}
	return applyMiddleware(middleware);
};

function persistedStore(initialState = {}) {
	return createStore(
		persistedReducer,
		initialState,
		bindMiddleware([thunkMiddleware])
	);
}

const makeStore = ({ isServer }: any) => {
	if (isServer) {
		return createStore(rootReducer, bindMiddleware([thunkMiddleware]));
	} else {
		const store = persistedStore();
		store.__persistor = persistStore(store);
		return store;
	}
};

export const reduxWrapper = createWrapper(makeStore);
