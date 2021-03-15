import React, { FC } from 'react';
import { POLICIES } from '../../../constants/endpoints';
import { fetcher } from '../../../lib/fetcher';
import { MetaInfo } from '../../../components/shared/MetaInfo';
import Policies from '../../../components/shared/Policies/Policies';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const Index: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
	policy
}) => {
	return (
		<>
			<MetaInfo
				title='MacroBros - Terms of Service'
				description='This is the Privacy Policy for the MacroBros website. By using this service you agree to the terms outlined on this page'
			/>
			<Policies {...policy} />
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const policy = await fetcher(POLICIES.TERMS_OF_SERVICE);
	return { props: { policy } };
};

export default Index;
