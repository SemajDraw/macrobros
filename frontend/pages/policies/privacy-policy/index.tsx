import React, { FC } from 'react';
import { fetcher } from '../../../library/fetcher';
import { MetaInfo } from '../../../components/shared/MetaInfo';
import Policies from '../../../components/shared/Policies/Policies';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Policy } from '../../../models/Policy';

export const Index: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
	policy
}) => {
	return (
		<>
			<MetaInfo
				title='MacroBros - Privacy Policy'
				description='This is the terms of service for the MacroBros website. By using this service you agree to the terms outlined on this page'
			/>
			<Policies {...policy} />
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const url: string =
		process.env.NODE_ENV !== 'production'
			? 'http://localhost:8000/api/terms-conditions/privacy-policy'
			: 'http://macrobros-api:8000/api/terms-conditions/privacy-policy';
	const policy: Policy = await fetcher(url);
	return { props: { policy } };
};

export default Index;
