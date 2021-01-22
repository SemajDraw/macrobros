import React from 'react';
import {
	chakra,
	ChakraProps,
	ComponentWithAs,
	forwardRef
} from '@chakra-ui/react';
import { isValidMotionProp, motion, MotionProps } from 'framer-motion';

export type MotionBoxProps = Omit<ChakraProps, keyof MotionProps> &
	MotionProps & {
		as?: React.ElementType;
	};

export const MotionBox = motion.custom(
	forwardRef<MotionBoxProps, 'div'>((props, ref) => {
		const chakraProps = Object.keys(props)
			.map((key) => [key, props[key]])
			.filter(([key]) => !isValidMotionProp(key))
			.reduce((acc, [key, value]) => Object.assign(acc, { [key]: value }), {});

		return <chakra.div ref={ref} {...chakraProps} />;
	})
) as ComponentWithAs<'div', MotionBoxProps>;

export default MotionBox;
