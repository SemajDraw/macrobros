import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { HOME } from '../constants/routes';
import { useAuth } from '../providers/AuthProvider';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { hideLoader, showLoader } from '../redux/actions/loadingActions';

const withAuth = (WrappedComponent: any) => {
	const RequiresAuthentication = (props: any) => {
		const { isAuthenticated } = useAuth();
		const dispatch = useDispatch();
		const router = useRouter();

		useEffect(() => {
			if (isAuthenticated) router.push(HOME);
		}, [isAuthenticated]);

		return isAuthenticated ? (
			<>{dispatch(showLoader())}</>
		) : (
			<>
				{dispatch(hideLoader())}
				<WrappedComponent {...props} />
			</>
		);
	};

	return RequiresAuthentication;
};

withAuth.propTypes = {
	WrappedComponent: PropTypes.node.isRequired
};

export default withAuth;
