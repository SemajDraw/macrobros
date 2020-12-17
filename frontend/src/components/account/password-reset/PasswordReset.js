import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import queryString from 'query-string';
import { passwordReset } from '../../../actions/account/account';

export const PasswordReset = (props) => {
	const dispatch = useDispatch();
	const queryParams = queryString.parse(props.location.search);
	const [password, setPassword] = useState('');
	const [password1, setPassword1] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(
			passwordReset(queryParams.user, queryParams.token, password, password1)
		);
	};

	return (
		<div className='container mt-3 min-vh-100'>
			<div className='row justify-content-center'>
				<div className='col-md-8 col-10'>
					<div className='d-flex justify-content-center my-3'>
						<p>Put logo here</p>
					</div>
				</div>
			</div>
			<div className='row justify-content-center'>
				<div className='col-12 justify-content-center'>
					<div className='row justify-content-center'>
						<div className='d-none d-md-block col-md-8'>
							<div className='d-flex justify-content-center'>
								<h1>Please enter your new password</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='row justify-content-center'>
				<div className='col-md-5 col-10'>
					<div className='row justify-content-center mt-md-3 mt-2 form-container'>
						<div className='login-form card card-body p-4'>
							<form onSubmit={handleSubmit}>
								<div className='form-group'>
									<label className='mb-0'>Password</label>
									<input
										className='form-control'
										type='password'
										name='password'
										onChange={(e) => setPassword(e.target.value)}
										value={password}
									/>
								</div>
								<div className='form-group'>
									<label className='mb-0'>Confirm Password</label>
									<input
										className='form-control'
										type='password'
										name='password1'
										onChange={(e) => setPassword1(e.target.value)}
										value={password1}
									/>
								</div>
								<div className='form-group mb-0 mt-5'>
									<button type='submit' className='btn btn-primary btn-block'>
										Login
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PasswordReset;
