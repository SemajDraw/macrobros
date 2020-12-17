import React, { useState } from 'react';
import { UserSvg } from '../UserSvg';
import { useDispatch, useSelector } from 'react-redux';
import { formatUserInitials } from '../../../../utils/stringUtils';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import ConfirmationModal from '../../../common/ConfirmationModal';
import { updateAccount } from '../../../../actions/account/account';

const validationSchema = Yup.object().shape({
	isSubscribed: Yup.bool().required()
});

export const ProfileSettings = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth.user);
	const [modalShow, setModalShow] = useState(false);
	const [field, setField] = useState(null);

	const showModal = (name, value) => {
		setField({ [name]: value });
		setModalShow(true);
	};

	const handleAccountChange = (field) => {
		dispatch(updateAccount(field));
	};

	return (
		<div className='container mt-3 min-vh-100'>
			<div className='row justify-content-center'>
				<div className='col-10 col-lg-8 mt-5 user-details border-divider'>
					<div className='d-flex justify-content-between my-3'>
						<div>
							<h1>{formatUserInitials([user.firstName, user.lastName])}</h1>
						</div>
						<UserSvg initial={user.firstName[0].toUpperCase()} />
					</div>
				</div>
				<div className='col-10 col-lg-8 mt-4'>
					<div className='mt-3 mb-5'>
						<Formik
							initialValues={{ isSubscribed: user.isSubscribed }}
							validationSchema={validationSchema}
							onSubmit={() => {}}
						>
							{({
								values,
								errors,
								touched,
								handleChange,
								handleBlur,
								handleSubmit
							}) => (
								<Form noValidate onSubmit={handleSubmit}>
									{/*Emails from MacroBros*/}
									{
										<div>
											<h4>Emails from MacroBros</h4>
											<hr />
										</div>
									}
									<Form.Group controlId='isSubscribed'>
										<Form.Label>Newsletter Subscription</Form.Label>
										<Form.Check
											className='text-muted'
											muted
											name='isSubscribed'
											label='Receive the latest news from MacroBros'
											onChange={handleChange}
											onBlur={(e) => {
												handleBlur(e);
												handleAccountChange({ [e.target.name]: e.target.value });
											}}
											checked={values.isSubscribed}
											value={values.isSubscribed}
											isInvalid={touched.isSubscribed && errors.isSubscribed}
										/>
									</Form.Group>
								</Form>
							)}
						</Formik>
						<div className='mt-5'>
							<h4>MacroBros account</h4>
							<hr />
							<Button
								style={{ padding: 0 }}
								variant='link'
								name='isClosed'
								onClick={(e) => showModal(e.target.name, true)}
							>
								Close your MacroBros account?
							</Button>
						</div>
						<ConfirmationModal
							field={field}
							show={modalShow}
							callback={handleAccountChange}
							onHide={() => setModalShow(false)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileSettings;
