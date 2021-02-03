import React, { useEffect } from 'react';
import { parseCookie } from '../../../lib/parseCookies';
import { Text } from '@chakra-ui/layout';
import { ProfileTemplate } from '../../../components/Profile/ProfileTemplate';
import { formatUserInitials } from '../../../utils/stringUtils';
import { useAuth } from '../../../providers/AuthProvider';
import MetaInfo from '../../../components/shared/MetaInfo';
import { useRouter } from 'next/router';
import { ACCOUNT } from '../../../constants/routes';

export const Index = () => {
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
				description={
					'Welcome to your MacroBros profile! Here you can keep track of your favourite ' +
					'blog posts plus manage your subscriptions and account.'
				}
				title={`MacroBros - ${
					user && formatUserInitials([user?.firstName, user?.lastName])
				} Profile`}
			/>
			<ProfileTemplate tabIndex={0}>
				<Text mt={4} fontSize={'2xl'}>
					Saved Blogs
				</Text>
			</ProfileTemplate>
		</>
	);
};

export async function getServerSideProps({ req, res }: any) {
	const { token } = parseCookie(req);
	if (!token) {
		res.writeHead(302, { Location: '/account/login' });
		res.end();
		return { props: {} };
	}
	return { props: {} };
}

export default Index;
