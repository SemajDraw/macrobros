import styles from '../../pages/blog/[slug]/Blog.module.scss';
import { Box } from '@chakra-ui/layout';
import React, { FC } from 'react';

interface BlogContentProps {
	html: string;
}

export const BlogContent: FC<BlogContentProps> = ({ html }) => (
	<Box
		className={styles.content}
		width={'100%'}
		dangerouslySetInnerHTML={{ __html: html }}
		fontSize={{ base: 'xl' }}
		fontWeight={'normal'}
		fontFamily={'Georgia'}
		opacity={0.8}
		textAlign={'justify'}
	/>
);
