import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Account } from './Routes';
import LoadingSpinner from './LoadingSpinner';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
	<Route
		{...rest}
		render={(props) => {
			if (auth.isLoading) {
				return (
					<div
						className='d-flex align-items-center justify-content-center'
						style={{ height: '80%' }}
					>
						<div>
							<LoadingSpinner isLoading={auth.isLoading} />
						</div>
					</div>
				);
			} else if (!auth.isAuthenticated) {
				return <Redirect to={Account.LOGIN} />;
			} else {
				return <Component {...props} />;
			}
		}}
	/>
);

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
