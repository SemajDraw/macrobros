import React, { FC, useEffect } from 'react';
import { formatUserInitials } from '../../../utils/stringUtils';
import { useAuth } from '../../../providers/AuthProvider';
import { parseCookie } from '../../../lib/parseCookies';
import { Text } from '@chakra-ui/layout';
import { ProfileTemplate } from '../../../components/Profile/ProfileTemplate';
import { MetaInfo } from '../../../components/shared/MetaInfo';
import { SettingsForm } from './SettingsForm';
import { useRouter } from 'next/router';
import { ACCOUNT } from '../../../constants/routes';
import { GetServerSideProps } from 'next';

export const Index: FC = () => {
	const { user } = useAuth();

	const router = useRouter();
	const { isAuthenticated } = useAuth();

	useEffect(() => {
		if (!isAuthenticated) {
			router.push(ACCOUNT.LOGIN);
		}
	}, [isAuthenticated]);

	return (
		<>
			<MetaInfo
				description={'MacroBros profile settings! Here you can manage your account settings'}
				title={`MacroBros - ${
					user && formatUserInitials([user?.firstName, user?.lastName])
				} Settings`}
			/>
			<ProfileTemplate tabIndex={1}>
				<Text mt={4} fontSize={'2xl'}>
					Settings
				</Text>
				<SettingsForm {...user} />
			</ProfileTemplate>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	const { token } = parseCookie(req);
	if (!token) {
		res.writeHead(302, { Location: '/account/login' });
		res.end();
		return { props: {} };
	}
	return { props: {} };
};

export default Index;
