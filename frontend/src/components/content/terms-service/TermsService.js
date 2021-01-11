import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTermsService } from '../../../actions/terms-conditions/termsConditions';
import Moment from 'react-moment';
import LoadingSpinner from '../../shared/LoadingSpinner';
import MetaTags from '../../shared/MetaTags';

export const TermsService = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const termsService = useSelector(
		(state) => state.termsConditions.termsService
	);

	useEffect(() => {
		dispatch(getTermsService());
	}, []);

	useEffect(() => {
		if (termsService.id) {
			setIsLoading(false);
		}
	}, [termsService]);

	const renderTermsService = (content) => {
		return { __html: content };
	};

	return (
		<>
			<MetaTags
				description={
					'These are the terms of service for the MacroBros website. By using this service you agree ' +
					'to the terms outlined on this page'
				}
				title={'Terms of Service'}
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
					<h1>{termsService.title}</h1>
					<div
						className='mt-5 mb-5'
						dangerouslySetInnerHTML={renderTermsService(termsService.content)}
					/>
					<p>
						Last updated on the{' '}
						<Moment format='Do MMMM YYYY'>{termsService.dateCreated}</Moment>.
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

export default TermsService;
