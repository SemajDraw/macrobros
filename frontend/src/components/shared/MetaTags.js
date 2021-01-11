import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

export const MetaTags = ({ title, description }) => {
	return (
		<Helmet>
			{title !== null ? (
				<title>{`MacroBros - ${title}`}</title>
			) : (
				<title>{'MacroBros'}</title>
			)}
			<meta name='description' content={description} />
		</Helmet>
	);
};

MetaTags.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

export default MetaTags;
