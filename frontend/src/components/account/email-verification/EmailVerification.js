import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { verifyEmail } from '../../../actions/account/account';
import { MacroBrosIcon } from '../../common/MacroBrosIcon';
import { Button } from 'react-bootstrap';
import SocialIcons from '../../common/social-icons/SocialIcons';
import { Account } from '../../common/Routes';

export const EmailVerification = (props) => {
	const dispatch = useDispatch();
	const emailVerification = useSelector(
		(state) => state.account.emailVerification
	);

	const iconProps = {
		id: 'email-verification-icon',
		strokeColor: '#000000'
	};

	useEffect(() => {
		dispatch(verifyEmail(props.match.params.token));
	}, [emailVerification]);

	return (
		<div className='container d-flex align-items-center min-vh-100'>
			<div
				className='row justify-content-center'
				style={{ height: '100%', width: '100%' }}
			>
				<div className='col-md-8 col-10'>
					<div className='register-form card card-body p-4'>
						<div className='d-flex flex-column align-items-center text-center mx-5 my-md-3 my-2'>
							<div className='mt-4' style={{ height: '100px', width: '100px' }}>
								<MacroBrosIcon key={'register-success-icon'} props={iconProps} />
							</div>
							<h3 className='pt-5 pb-2'>{emailVerification.message[0]}</h3>
							<p>{emailVerification.message[1]}</p>
							{emailVerification.emailVerified === true ? (
								<Link to={Account.LOGIN}>
									<Button className='my-3 px-5'>LOGIN</Button>
								</Link>
							) : (
								<Link to={Account.REGISTER}>
									<Button className='my-3 px-5'>REGISTER</Button>
								</Link>
							)}
							<SocialIcons />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmailVerification;
