import { applyMiddleware, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistedReducer } from './RootReducer';
import thunkMiddleware from 'redux-thunk';
import { useMemo } from 'react';

let store;

const bindMiddleware = (middleware: Middleware[]) => {
	if (process.env.ENV !== 'prod') {
		return composeWithDevTools(applyMiddleware(...middleware));
	}
	return applyMiddleware(...middleware);
};

function makeStore(initialState = {}) {
	return createStore(persistedReducer, initialState, bindMiddleware([thunkMiddleware]));
}

export const initializeStore = (preloadedState) => {
	let _store = store ?? makeStore(preloadedState);

	// After navigating to a page with an initial Redux state, merge that state
	// with the current state in the store, and create a new store
	if (preloadedState && store) {
		_store = makeStore({
			...store.getState(),
			...preloadedState
		});
		// Reset the current store
		store = undefined;
	}

	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store;
	// Create the store once in the client
	if (!store) store = _store;

	return _store;
};

export function useStore(initialState) {
	return useMemo(() => initializeStore(initialState), [initialState]);
}
