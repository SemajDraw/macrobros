import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import './SocialIcons.scss';

export const SocialIcons = () => {
	return (
		<div className='mb-1 mt-5' style={{ width: '100%' }}>
			<div className='d-flex justify-content-around'>
				<div>
					<a className='social-link' href='https://www.facebook.com/macro.bros.716'>
						<FontAwesomeIcon size='2x' icon={faFacebook} />
					</a>
				</div>
				<div>
					<a
						className='social-link'
						href='https://www.instagram.com/macro_bros.com_/'
					>
						<FontAwesomeIcon size='2x' icon={faInstagram} />
					</a>
				</div>
				<div>
					<a className='social-link' href='https://twitter.com/BrosMacro'>
						<FontAwesomeIcon size='2x' icon={faTwitter} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default SocialIcons;
