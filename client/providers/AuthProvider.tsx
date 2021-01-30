import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../redux/actions/authActions';
import { useCookies } from 'react-cookie';

type AuthContextProps = {
	isAuthenticated: boolean;
	isLoading: boolean;
	token: string;
	user: null;
};

const AuthContext = React.createContext<Partial<AuthContextProps>>({});

interface AuthProviderProps {
	children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const dispatch = useDispatch();
	const [cookie, setCookie, removeCookie] = useCookies(['token']);
	const { isAuthenticated, isLoading, token, user } = useSelector(
		(state: any) => state.auth
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
		user
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = (): any => useContext(AuthContext);
