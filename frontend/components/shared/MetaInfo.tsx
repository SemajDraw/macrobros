import React, { FC } from 'react';
import Head from 'next/head';

interface MetaInfoProps {
	title: string;
	description: string;
}

export const MetaInfo: FC<MetaInfoProps> = ({ title, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name='description' content={description} />
		</Head>
	);
};
