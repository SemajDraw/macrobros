import React from 'react';
import RegisterForm from './RegisterForm';
import { Link } from 'react-router-dom';
import './Register.scss';
import { MacroBrosIcon } from '../../shared/MacroBrosIcon';
import { Account } from '../../shared/Routes';
import MetaTags from '../../shared/MetaTags';

export const Register = (props) => {
	const iconProps = {
		id: 'register-icon',
		strokeColor: '#000000'
	};

	return (
		<div className='container min-vh-100 d-flex align-items-center my-5'>
			<MetaTags
				description={
					'New to MacroBros? Sign up for an account so you can keep track of your favourite blog ' +
					'posts and receive our weekly newsletter'
				}
				title={'Register'}
			/>
			<div style={{ width: '100%' }}>
				<div className='row justify-content-center'>
					<div className='col-md-8 col-10'>
						<div className='d-flex justify-content-center my-3'>
							<div style={{ height: '100px', width: '100px' }}>
								<MacroBrosIcon key={'register-icon'} props={iconProps} />
							</div>
						</div>
					</div>
				</div>
				<div className='row justify-content-center'>
					<div className='col-12 justify-content-center'>
						<div className='row justify-content-center'>
							<div className='d-none d-md-block col-md-8'>
								<div className='d-flex justify-content-center'>
									<h1>Create your account</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='row justify-content-center'>
					<div className='col-md-5 col-10'>
						<div className='row justify-content-center my-md-3 my-2 form-container'>
							<RegisterForm props={props} />
						</div>
					</div>
				</div>
				<div className='row justify-content-center'>
					<div className='col-md-5 col-10'>
						<div className='row text-center my-md-3 my-2 form-container'>
							<div className='login-form card card-body'>
								<p className='my-0'>
									Already have an account?
									<Link className='register-link ml-1' to={Account.REGISTER}>
										Please login.
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
