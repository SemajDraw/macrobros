import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './App.Routes';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth/auth';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import './App.scss';

const history = createBrowserHistory();

export const App = () => {
	store.dispatch(loadUser());

	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};

ReactDOM.render(<App />, document.getElementById('app'));
