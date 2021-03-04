import React, { FC } from 'react';
import { Flex } from '@chakra-ui/layout';
import { MacroBrosIcon } from '../Icons/MacroBrosIcon';
import { MotionBox } from '../../FramerMotion/MotionBox';

export const LoadingPage: FC = () => {
	const transitionValues = {
		type: 'spring',
		repeat: Infinity,
		repeatType: 'reverse'
	};

	return (
		<Flex
			direction={'column'}
			justifyContent={'center'}
			p={0}
			m={0}
			align={'center'}
			width={'100vw'}
			height={'100vh'}
			bg={'#191919'}
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
					<MacroBrosIcon id='loader' strokeColor='white' />
				</Flex>
			</MotionBox>
		</Flex>
	);
};

export default LoadingPage;
