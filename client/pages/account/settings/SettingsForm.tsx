import React, { ChangeEvent, FC } from 'react';
import { Divider, Flex, Text } from '@chakra-ui/layout';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Switch } from '@chakra-ui/switch';
import { useDispatch } from 'react-redux';
import { updateAccount } from '../../../redux/actions/accountActions';
import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import CloseAccountModal from './CloseAccountModal';
import { User } from '../../../models/User';

const validationSchema = Yup.object().shape({
	isSubscribed: Yup.bool().required()
});

export const SettingsForm: FC<User> = (props) => {
	const { isSubscribed } = props;
	const modal = useDisclosure();
	const dispatch = useDispatch();

	const handleAccountChange = (field: Record<string, string>) => {
		dispatch(updateAccount(field));
	};

	return (
		<Flex w={'100%'} direction={'column'}>
			<Flex mt={3} w={'100%'}>
				<Formik
					initialValues={{ isSubscribed: isSubscribed }}
					validationSchema={validationSchema}
					onSubmit={() => {
						return;
					}}
				>
					{({ handleBlur }) => (
						<Form style={{ width: '100%' }}>
							<Flex direction={'column'} mb={3}>
								<Text fontSize={'xl'} fontWeight={'medium'}>
									Emails from MacroBros
								</Text>
								<Divider />
							</Flex>

							<Field name={'isSubscribed'}>
								{({ field, form }) => (
									<FormControl isInvalid={form.errors.isSubscribed && form.touched.isSubscribed}>
										<FormLabel fontWeight={'medium'}>Newsletter Subscription</FormLabel>
										<Flex align={'center'}>
											<Switch
												{...field}
												id={'isSubscribed'}
												defaultChecked={isSubscribed}
												size={'sm'}
												onBlur={(e: ChangeEvent<HTMLInputElement>) => {
													handleBlur(e);
													handleAccountChange({ [e.target.name]: e.target.value });
												}}
											/>
											<Text ml={2} fontWeight={'normal'}>
												Receive the latest news from MacroBros
											</Text>
										</Flex>
									</FormControl>
								)}
							</Field>
						</Form>
					)}
				</Formik>
			</Flex>

			<Flex mt={6} w={'100%'} direction={'column'}>
				<Flex direction={'column'} mb={2} w={'100%'}>
					<Text fontSize={'xl'} fontWeight={'medium'}>
						MacroBros account
					</Text>
					<Divider />
				</Flex>
				<Flex>
					<Button
						fontWeight={'normal'}
						colorScheme={'blue'}
						variant={'link'}
						onClick={modal.onOpen}
					>
						Close your MacroBros account
					</Button>
				</Flex>
			</Flex>
			<CloseAccountModal {...modal} callBack={handleAccountChange} />
		</Flex>
	);
};
