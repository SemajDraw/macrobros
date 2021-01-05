import React from 'react';
import { MacroBrosIcon } from './MacroBrosIcon';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialIcons from './social-icons/SocialIcons';

export const FormSuccess = (props) => {
	const { header, body } = props.location.state;

	const iconProps = {
		id: 'form-success-icon',
		strokeColor: '#000000'
	};

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
							<h3 className='mt-3'>{header}</h3>
							<p>{body}</p>
							<Link to='/contact'>
								<Button className='my-3'>CONTACT US</Button>
							</Link>
							<SocialIcons />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormSuccess;
