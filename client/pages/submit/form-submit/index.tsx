import React from 'react';
import { Flex } from '@chakra-ui/layout';
import MetaInfo from '../../../components/shared/MetaInfo';
import { useSelector } from 'react-redux';
import FormSubmitPage from '../../../components/shared/FormSubmitPage';

export const Index = () => {
	const { body, header } = useSelector((state: any) => state.formSubmit);

	return (
		<>
			<MetaInfo description={body} title={header} />
			<Flex direction={'column'}>
				<FormSubmitPage
					icons={true}
					heading={header}
					body={body}
					meta={{
						title: 'MacroBros - Login',
						desc:
							"Please sign into your MacroBros account. If you don't have an account, what are you waiting for?"
					}}
				/>
			</Flex>
		</>
	);
};

export default Index;
