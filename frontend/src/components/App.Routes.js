import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import PrivateRoute from './common/PrivateRoute';
import Home from './content/home/Home';
import Login from './account/login/Login';
import Register from './account/register/Register';
import Profile from './account/profile/Profile';
import Header from './layout/header/Header';
import Alerts from "./common/alerts/Alerts";
import PageNotFound from "./content/page-not-found/PageNotFound";

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Header/>
                    <Alerts/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/register' component={Register}/>
                        <PrivateRoute exact path='/profile' component={Profile}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default AppRouter;