import React, { FC } from 'react';
import { useAuth } from '../../../providers/AuthProvider';
import { NavButton } from '../NavButton';
import { Authenticated } from './Authenticated';

export const NavMenu: FC = () => {
	const { isAuthenticated, user } = useAuth();
	return isAuthenticated ? (
		<Authenticated {...user} />
	) : (
		<NavButton isAuthenticated={isAuthenticated} text={'Sign In'} />
	);
};
