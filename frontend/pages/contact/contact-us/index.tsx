import React, { FC } from 'react';
import FormPage from '../../../components/shared/FormPage';
import ContactUsForm from '../../../components/Contact/ContactUsForm';

export const Index: FC = () => {
	return (
		<FormPage
			icons={true}
			heading={'Get in touch'}
			meta={{
				title: 'MacroBros - Contact Us',
				description: 'If you have any questions or queries for us please get in touch.'
			}}
			minWidth={{ base: '85%', sm: '355px', md: '400px', lg: '500px' }}
			maxWidth={{ base: '85%', sm: '400px', lg: '500px' }}
		>
			<ContactUsForm />
		</FormPage>
	);
};

export default Index;
