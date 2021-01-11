import React from 'react';
import queryString from 'query-string';
import { MacroBrosIcon } from '../../shared/MacroBrosIcon';
import SocialIcons from '../../shared/social-icons/SocialIcons';
import PasswordResetForm from './PasswordResetForm';
import MetaTags from '../../shared/MetaTags';

export const PasswordReset = (props) => {
	const queryParams = queryString.parse(props.location.search);

	const iconProps = {
		id: 'login-icon',
		strokeColor: '#000000'
	};

	return (
		<div className='container d-flex align-items-center my-5'>
			<MetaTags
				description={
					'Please enter and confirm your new MacroBros account password.'
				}
				title={'Reset Password'}
			/>
			<div style={{ width: '100%' }}>
				<div className='row justify-content-center'>
					<div className='col-md-8 col-10'>
						<div className='d-flex justify-content-center my-3'>
							<div style={{ height: '100px', width: '100px' }}>
								<MacroBrosIcon key={'login-icon'} props={iconProps} />
							</div>
						</div>
					</div>
				</div>
				<div className='row justify-content-center'>
					<div className='col-12 justify-content-center'>
						<div className='row justify-content-center'>
							<div className='d-none d-md-block col-md-8'>
								<div className='d-flex justify-content-center'>
									<h3>Please enter your new password</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='row justify-content-center'>
					<div className='col-10 col-md-5 col-lg-4'>
						<div className='row justify-content-center mt-md-3 mt-2 mb-3 form-container'>
							<PasswordResetForm queryParams={queryParams} props={props} />
						</div>
					</div>
				</div>
				<div className='row justify-content-center'>
					<div className='col-10 col-md-5 col-lg-4'>
						<SocialIcons />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PasswordReset;
