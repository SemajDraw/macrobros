import React, { FC } from 'react';
import { Flex } from '@chakra-ui/layout';
import { useSelector } from 'react-redux';
import FormSubmitPage from '../../../components/shared/FormSubmitPage';

export const Index: FC = () => {
	const { body, header } = useSelector((state: any) => state.formSubmit);

	return (
		<Flex direction={'column'}>
			<FormSubmitPage
				icons={true}
				heading={header}
				body={body}
				meta={{
					title: `MacroBros - ${header}`,
					description: body
				}}
			/>
		</Flex>
	);
};

export default Index;
