import React, { FC, useEffect } from 'react';
import { parseCookie } from '../../../library/parseCookies';
import { Grid, GridItem, Text } from '@chakra-ui/layout';
import { ProfileTemplate } from '../../../components/Profile/ProfileTemplate';
import { formatUserInitials } from '../../../utils/stringUtils';
import { useAuth } from '../../../providers/AuthProvider';
import { MetaInfo } from '../../../components/shared/MetaInfo';
import { useRouter } from 'next/router';
import { HOME } from '../../../constants/routes';
import { GetServerSideProps } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { savedBlogsSelector } from '../../../redux/slices/AccountSlice';
import { getSavedBlogs } from '../../../redux/actions/accountActions';
import { BlogCard } from '../../../components/Blog/BlogGrid/BlogCard';

export const Index: FC = () => {
	const { user, isAuthenticated } = useAuth();
	const router = useRouter();
	const dispatch = useDispatch();
	const savedBlogs = useSelector(savedBlogsSelector);

	useEffect(() => {
		if (!isAuthenticated) router.push(HOME);
	}, [isAuthenticated]);

	useEffect(() => {
		dispatch(getSavedBlogs());
	}, []);

	return (
		<>
			<MetaInfo
				description={
					'Welcome to your MacroBros profile! Here you can keep track of your favourite ' +
					'blog posts plus manage your subscriptions and account.'
				}
				title={`MacroBros - ${formatUserInitials([user.firstName, user.lastName])} Profile`}
			/>
			<ProfileTemplate tabIndex={0}>
				<Text mt={4} fontSize={'2xl'}>
					Saved Blogs
				</Text>
				<Grid mt={5} rowGap={4}>
					{savedBlogs.results.map((blog, i) => (
						<GridItem key={i} colSpan={12}>
							<BlogCard blog={blog} colSpan={6} />
						</GridItem>
					))}
				</Grid>
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
