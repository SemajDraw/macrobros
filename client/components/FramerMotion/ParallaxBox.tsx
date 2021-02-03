// import React, { useRef, useState, useEffect, useMemo } from 'react';
// import { useViewportScroll, useTransform } from 'framer-motion';
//
// import { MotionBox } from './MotionBox';
//
// export const ParallaxBox = ({
// 	children,
// 	yOffset = 90, // number > 0
// 	easing = [0.42, 0, 0.58, 1],
// 	triggerPoint = 0, // value between 0 and 1 (top and bottom of the window), point to start animation
// 	fadeOut = true, // true | false fade an element out on end of the animation
// 	...rest
// }: any) => {
// 	const { scrollY } = useViewportScroll();
// 	const ref = useRef();
// 	const [elementTop, setElementTop] = useState(0);
// 	const [elementBottom, setElementBottom] = useState(0);
// 	const [clientHeight, setClientHeight] = useState(0);
//
// 	console.log('element top', elementTop);
// 	console.log('element bottom', elementBottom);
// 	console.log('element height', clientHeight);
//
// 	useEffect(() => {
// 		if (!ref.current) return;
//
// 		const setValues = () => {
// 			setElementTop(ref.current.offsetTop);
// 			setElementBottom(ref.current.offsetTop + ref.current.offsetHeight);
// 			setClientHeight(window.innerHeight);
// 		};
//
// 		setValues();
// 		document.addEventListener('load', setValues);
// 		window.addEventListener('load', setValues);
// 		window.addEventListener('resize', setValues);
//
// 		return () => {
// 			document.removeEventListener('load', setValues);
// 			window.addEventListener('load', setValues);
// 			window.removeEventListener('resize', setValues);
// 			setElementTop(0);
// 			setElementBottom(0);
// 			setClientHeight(0);
// 		};
// 	}, [ref, yOffset]);
//
// 	const transformInitialValue = elementTop - clientHeight * triggerPoint;
// 	const transformFinalValue = elementTop + yOffset;
//
// 	const yRange = [transformInitialValue, transformFinalValue];
//
// 	const y = useTransform(scrollY, yRange, [0, -yOffset], easing);
//
// 	const opacityInitialValue = fadeOut ? 0 : 1;
// 	const opacityRange = useMemo(() => [opacityInitialValue, 1], [
// 		opacityInitialValue
// 	]);
//
// 	const yOpacityRange = [elementBottom, transformFinalValue - yOffset];
// 	const opacity = useTransform(scrollY, yOpacityRange, opacityRange);
//
// 	return (
// 		<MotionBox
// 			ref={ref}
// 			initial={{ y: 0 }}
// 			transition={{ type: 'spring', duration: 1 }}
// 			style={{ y, opacity }}
// 			{...rest}
// 		>
// 			{children}
// 		</MotionBox>
// 	);
// };
//
// export default ParallaxBox;

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
