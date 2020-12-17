import React from 'react';

export const UserSvg = ({ initial }) => {
	return (
		<svg width='126' height='126' xmlns='http://www.w3.org/2000/svg'>
			<g>
				<title>User Initial</title>
				<ellipse
					stroke='#000'
					ry='63'
					rx='63'
					id='svg_3'
					cy='63'
					cx='63'
					strokeWidth='0'
					fill='#894F3F'
				/>
				<text
					xmlSpace='preserve'
					textAnchor='middle'
					fontFamily='Oswald, sans-serif'
					fontWeight='300'
					fontSize='75'
					id='svg_5'
					y='54%'
					x='50%'
					dominantBaseline='middle'
					strokeOpacity='null'
					strokeWidth='0'
					stroke='#000'
					fill='#ffffff'
				>
					{initial}
				</text>
			</g>
		</svg>
	);
};
