import React from 'react';
import { POLICIES } from '../../../constants/urls';
import fetcher from '../../../lib/fetcher';
import MetaInfo from '../../../components/shared/MetaInfo';
import Policies from '../../../components/shared/Policies/Policies';

export const Index = ({ policy }) => {
	const { content, dateCreated, title } = policy;

	return (
		<>
			<MetaInfo
				title='MacroBros - Privacy Policy'
				description='This is the terms of service for the MacroBros website. By using this service you agree to the terms outlined on this page'
			/>
			<Policies content={content} lastModified={dateCreated} title={title} />
		</>
	);
};

export async function getStaticProps() {
	const policy = await fetcher(POLICIES.PRIVACY_POLICY);
	return { props: { policy } };
}
export default Index;
