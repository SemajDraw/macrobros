import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './App.Routes';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth/auth';
import ReactGa from 'react-ga';
import './App.scss';

export const App = () => {
	useEffect(() => {
		ReactGa.initialize('G-QY4CZ5ENYG');
		ReactGa.pageview(window.location.pathname);
	}, []);

	store.dispatch(loadUser());

	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};

ReactDOM.render(<App />, document.getElementById('app'));
