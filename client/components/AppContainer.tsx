import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import LoadingPage from './shared/Loading/LoadingPage';

export const AppContainer: FC = ({ children }) => {
	const isLoading = useSelector((state: any) => state.loading.isLoading);

	return isLoading ? <LoadingPage /> : <>{children}</>;
};

export default AppContainer;
