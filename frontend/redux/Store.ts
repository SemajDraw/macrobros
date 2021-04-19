import { applyMiddleware, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistedReducer } from './RootReducer';
import thunkMiddleware from 'redux-thunk';
import { useMemo } from 'react';

let store;

const bindMiddleware = (middleware: Middleware[]) => {
	if (process.env.NEXT_PUBLIC_ENV !== 'prod') {
		return composeWithDevTools(applyMiddleware(...middleware));
	}
	return applyMiddleware(...middleware);
};

function makeStore(initialState = {}) {
	return createStore(persistedReducer, initialState, bindMiddleware([thunkMiddleware]));
}

export const initializeStore = (preloadedState) => {
	let _store = store ?? makeStore(preloadedState);

	if (preloadedState && store) {
		_store = makeStore({
			...store.getState(),
			...preloadedState
		});
		store = undefined;
	}

	if (typeof window === 'undefined') return _store;
	if (!store) store = _store;

	return _store;
};

export function useStore(initialState) {
	return useMemo(() => initializeStore(initialState), [initialState]);
}
