import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import LoadingPage from './shared/Loading/LoadingPage';
import { State } from '../redux/RootReducer';

export const AppContainer: FC = ({ children }) => {
	const isLoading = useSelector((state: State) => state.loading.isLoading);

	return isLoading ? <LoadingPage /> : <>{children}</>;
};
