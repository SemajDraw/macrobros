import React from 'react';
import MotionBox from './MotionBox';
import { useInView } from 'react-intersection-observer';

export default function ParallaxBox({ children }) {
	const [ref, inView, entry] = useInView({
		threshold: 1,
		triggerOnce: false
	});

	const variants = {
		visible: { opacity: 1, scale: 1, y: 0 },
		hidden: {
			opacity: 0.85,
			scale: 0.99,
			y: 10
		}
	};

	return (
		<MotionBox
			animate={inView ? 'visible' : 'hidden'}
			variants={variants}
			transition={{ duration: 2, ease: 'easeOut' }}
			ref={ref}
		>
			{children}
		</MotionBox>
	);
}
