import React, { FC } from 'react';
import ParallaxBox from '../../FramerMotion/ParallaxBox';
import { BlogMin } from '../../../models/BlogMin';
import { BlogCard } from './BlogCard';

interface ParallaxCardProps {
	blog: BlogMin;
	index: number;
}

export const ParallaxCard: FC<ParallaxCardProps> = ({ blog, index }) => {
	return (
		<ParallaxBox>
			<BlogCard key={index} blog={blog} />
		</ParallaxBox>
	);
};

export default ParallaxCard;
