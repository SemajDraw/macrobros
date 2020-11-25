import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Account } from "./Routes";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        { ...rest }
        render={ props => {
            if (auth.isLoading) {
                return <h2>Loading... Replace with spinner</h2>;
            } else if (!auth.isAuthenticated) {
                return <Redirect to={ Account.LOGIN }/>
            } else {
                return <Component { ...props }/>;
            }
        } }
    />
);

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);