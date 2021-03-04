import React, { FC } from 'react';
import { POLICIES } from '../../../constants/endpoints';
import { fetcher } from '../../../lib/fetcher';
import { MetaInfo } from '../../../components/shared/MetaInfo';
import Policies from '../../../components/shared/Policies/Policies';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Policy } from '../../../models/Policy';

export const Index: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ policy }) => {
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

export const getStaticProps: GetStaticProps = async () => {
	const policy: Policy = await fetcher(POLICIES.PRIVACY_POLICY);
	return { props: { policy } };
};

export default Index;
