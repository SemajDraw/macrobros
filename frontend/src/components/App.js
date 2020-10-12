import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import AppRouter from "./App.Routes";

import {positions, Provider as AlertProvider} from 'react-alert';
import AlertMUITemplate from 'react-alert-template-mui';

import {Provider} from 'react-redux';
import store from '../store';
import {loadUser} from "../actions/auth/auth";
import './App.scss';

// Alert options
const alertOptions = {
    position: positions.MIDDLE
};

class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertMUITemplate} {...alertOptions}>
                    <AppRouter/>
                </AlertProvider>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));