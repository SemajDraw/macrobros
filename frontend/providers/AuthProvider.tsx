import React, { FC, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../redux/actions/authActions';
import { useCookie } from '../hooks/useCookie';
import { State } from '../redux/RootReducer';
import { AuthState } from '../redux/slices/AuthSlice';

const AuthContext = React.createContext<Partial<AuthState>>({});

interface AuthProviderProps {
	children: React.ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const dispatch = useDispatch();
	const { cookie, setCookie, removeCookie } = useCookie('token');
	const { isAuthenticated, isLoading, token, user } = useSelector(
		(state: State) => state.auth
	);

	useEffect(() => {
		if (!isAuthenticated) {
			removeCookie('token');
		}
	}, [isAuthenticated]);

	useEffect(() => {
		if (token) {
			setCookie('token', token, {
				path: '/',
				maxAge: 86400,
				sameSite: true
			});
			dispatch(loadUser());
		}
	}, []);

	const value = {
		isAuthenticated,
		isLoading,
		token,
		user,
		cookie,
		setCookie,
		removeCookie
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): any => useContext(AuthContext);
