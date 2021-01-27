import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../redux/actions/auth';

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
	const { isAuthenticated, isLoading, token, user } = useSelector(
		(state: any) => state.auth
	);

	useEffect(() => {
		dispatch(loadUser());
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
