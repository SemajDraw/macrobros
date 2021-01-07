import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './App.Routes';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth/auth';
import { createBrowserHistory } from 'history';
import ReactGa from 'react-ga';
import './App.scss';

const history = createBrowserHistory();

export const App = () => {
	useEffect(() => {
		ReactGa.initialize('UA-186791845-1');
		history.listen((location) => {
			ReactGa.set({ page: location.pathname }); // Update the user's current page
			ReactGa.pageview(location.pathname); // Record a pageview for the given page
		});
	}, []);

	store.dispatch(loadUser());

	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};

ReactDOM.render(<App />, document.getElementById('app'));
