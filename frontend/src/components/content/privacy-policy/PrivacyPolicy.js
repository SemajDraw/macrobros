import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPrivacyPolicy } from '../../../actions/terms-conditions/termsConditions';
import Moment from 'react-moment';
import LoadingSpinner from '../../shared/LoadingSpinner';
import MetaTags from '../../shared/MetaTags';

export const PrivacyPolicy = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const privacyPolicy = useSelector(
		(state) => state.termsConditions.privacyPolicy
	);

	useEffect(() => {
		dispatch(getPrivacyPolicy());
	}, []);

	useEffect(() => {
		if (privacyPolicy.id) {
			setIsLoading(false);
		}
	}, [privacyPolicy]);

	const renderPrivacyPolicy = (content) => {
		return { __html: content };
	};

	return (
		<>
			<MetaTags
				description={
					'This is the Privacy Policy for the MacroBros website. By using this service you agree ' +
					'to the terms outlined on this page'
				}
				title={'Privacy Policy'}
			/>
			{isLoading ? (
				<div
					className='d-flex align-items-center justify-content-center'
					style={{ height: '80%' }}
				>
					<div>
						<LoadingSpinner isLoading={isLoading} />
					</div>
				</div>
			) : (
				<div className='container mt-5 min-vh-100'>
					<h1>{privacyPolicy.title}</h1>
					<div
						className='mt-5 mb-5'
						dangerouslySetInnerHTML={renderPrivacyPolicy(privacyPolicy.content)}
					/>
					<p>
						Last updated on{' '}
						<Moment format='Do MMMM YYYY'>{privacyPolicy.dateCreated}</Moment>.
					</p>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-8 col-sm-12 col-10 mb-4'>
								<hr />
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default PrivacyPolicy;
