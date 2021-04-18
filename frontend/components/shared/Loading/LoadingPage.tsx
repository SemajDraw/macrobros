import React, { FC } from 'react';
import { Flex } from '@chakra-ui/layout';
import { MacroBrosIcon } from '../Icons/MacroBrosIcon';
import { MotionBox } from '../../FramerMotion/MotionBox';

interface LoadingPageProps {
	background?: string;
	icon?: string;
}

export const LoadingPage: FC<LoadingPageProps> = ({
	background = '#191919',
	icon = 'white'
}) => {
	const transitionValues = {
		type: 'spring',
		repeat: Infinity,
		repeatType: 'reverse'
	};

	return (
		<Flex
			direction={'column'}
			justifyContent={'center'}
			align={'center'}
			width={'100vw'}
			height={'100vh'}
			bg={background}
		>
			<MotionBox
				transition={{
					y: transitionValues,
					width: transitionValues,
					height: transitionValues
				}}
				animate={{
					width: ['10rem', '10rem', '15rem'],
					height: ['-10rem', '-10rem', '-4rem']
				}}
			>
				<Flex align={'center'} justifyContent={'center'} direction={'column'} h={'100%'}>
					<MacroBrosIcon id='loader' strokeColor={icon} />
				</Flex>
			</MotionBox>
		</Flex>
	);
};

export default LoadingPage;
