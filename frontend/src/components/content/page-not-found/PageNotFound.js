import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {gsap, TweenLite} from 'gsap';
import MotionPathPlugin from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);


import './PageNotFound.scss'


class PageNotFound extends Component {

    componentDidMount() {
        TweenLite.set('#neckHighlight1', {scale: 1.5, y: -30});
        TweenLite.set('#neckHighlight2', {scale: 1.5, y: -30});

        const left = gsap.timeline({
            paused: true,
            yoyo: true,
            repeat: 1,
            defaults: {duration: 0.96, ease: 'expo'}
        });
        left
            .to('#bodyBack', {x: -6}, 'body')
            .to('#bodyFront', {x: 6, y: 1}, 'body')
            .to('#neckBack', {x: -2}, 'body')
            .to('#neck', {x: 4}, 'body')
            .to('#neckClipGroup', {x: 4}, 'body')
            .to('#highLightGroup', {y: 20, ease: 'power4.out'}, 'body')
            .to('#headStock', {x: 4}, 'body')
            .to('#headStockBack', {x: -2}, 'body')
            .to(
                '#bridge',
                {x: 4, y: 1, scaleX: 0.98, transformOrigin: 'right center'},
                'body'
            )
            .to('#soundhole', {x: 4, y: 1}, 'body')
            .to('#holeClipGroup', {x: 4, y: 1}, 'body')
            .to('#strings', {x: 4}, 'body')
            .to('#guitar', {rotation: -5, transformOrigin: 'left bottom'}, 'body')
            .to(
                '#shadow',
                {
                    scaleX: 0.88,
                    transformOrigin: '50% 50%',
                    duration: 0.32,
                    ease: 'power1'
                },
                'body+=0.04'
            );

        const right = gsap.timeline({
            paused: true,
            yoyo: true,
            repeat: 1,
            defaults: {duration: 0.96, ease: 'expo'}
        });
        right
            .to('#bodyBack', {x: 6}, 'body')
            .to('#bodyFront', {x: -6, y: -1}, 'body')
            .to('#neckBack', {x: 2}, 'body')
            .to('#neck', {x: -4}, 'body')
            .to(
                '#neckHighlight1',
                {y: -40, ease: 'power4.out'},
                'body'
            )
            .to(
                '#neckHighlight2',
                {y: -40, ease: 'power4.out'},
                'body'
            )
            .to('#highLightGroup', {y: 20, ease: 'power4.out'}, 'body')
            .to('#neckClipGroup', {x: -4}, 'body')
            .to('#headStock', {x: -4}, 'body')
            .to('#headStockBack', {x: 2}, 'body')
            .to(
                '#bridge',
                {x: -4, y: -1, scaleX: 0.98, transformOrigin: 'left center'},
                'body'
            )
            .to('#soundhole', {x: -4, y: -1}, 'body')
            .to('#holeClipGroup', {x: -4, y: -1}, 'body')
            .to('#strings', {x: -4}, 'body')
            .to(
                '#guitar',
                {rotation: 5, y: -10, transformOrigin: 'left bottom'},
                'body'
            )
            .to('#holeLight', {x: 20}, 'body')
            .to(
                '#shadow',
                {
                    scaleX: 0.88,
                    transformOrigin: '50% 50%',
                    duration: 0.32,
                    ease: 'power1'
                },
                'body+=0.04'
            );

        const stringTl = gsap.timeline({
            paused: true,
            yoyo: true,
            defaults: {duration: 0.32, ease: 'elastic.out(0.75, 0.3)'}
        });
        stringTl
            .to('#strings line', {x: -2, stagger: 0.04, strokeWidth: 3}, 'in')
            .to('#strings line', {x: 2, stagger: 0.04, strokeWidth: 2}, 'in+=0.04')
            .to('#strings line', {x: 0, stagger: 0.04, strokeWidth: 2}, 'in+=0.08');

        TweenLite.set('#circle', {x: 10, opacity: 0});

        const noteTl = gsap.timeline({paused: true});
        noteTl
            .to('#circle', {opacity: 1, duration: 0.01}, 'notes')
            .to(
                '#circle',
                {
                    scale: 2.25,
                    transformOrigin: 'center center',
                    duration: 0.64,
                    ease: 'circ'
                },
                'notes'
            )
            .to(
                '#note',
                {
                    scale: 1.35,
                    transformOrigin: 'center center',
                    motionPath: {path: '#notePath', align: 'self'},
                    duration: 1.9
                },
                'notes'
            )
            .to(
                '#note',
                {opacity: 0, transformOrigin: 'center center', duration: 0.7},
                'notes+=1'
            )
            .to(
                '#note2',
                {
                    scale: 1.25,
                    transformOrigin: 'center center',
                    motionPath: {path: '#notepath2', align: 'self'},
                    duration: 1.9
                },
                'notes'
            )
            .to(
                '#note2',
                {opacity: 0, transformOrigin: 'center center', duration: 0.7},
                'notes+=1'
            )
            .to('#circle', {opacity: 0, duration: 0.16}, 'notes+=0.24');

        TweenLite.set('#note', {transformOrigin: 'center center'});

        const noteRotation = gsap.timeline({
            paused: true,
            defaults: {duration: 0.32}
        });
        noteRotation
            .to(
                '#note',
                {
                    keyframes: [
                        {rotation: 3},
                        {rotation: -3},
                        {rotation: 5},
                        // { rotation: -5 },
                        // { rotation: 5 }
                    ]
                },
                0
            )
            .to(
                '#note2',
                {
                    keyframes: [
                        {rotation: 3},
                        {rotation: -3},
                        {rotation: 5},
                        // { rotation: -5 },
                        // { rotation: 5 }
                    ]
                },
                0
            );

        const masterTl = gsap.timeline({repeat: -1});
        masterTl
            .add(left.play(), 0)
            .add(right.play(), 1.92)
            .add(stringTl.play(), 1.96)
            .add(noteTl.play(), 1.9)
            .add(noteRotation.play(), 1.9);

    }


    render() {
        return (
            <div className='body'>
                <div className='container error-page-container'>
                    <div className='row'>
                        <div className='svg-container col-md-6 col-sm-12 align-self-center'>
                            <svg version='1.1' xmlns='http://www.w3.org/2000/svg'
                                 xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 800 600' xmlSpace='preserve'>
                                <defs>
                                    <clipPath id='holeClip'>
                                        <circle cx='400' cy='371.122' r='22.69'/>
                                    </clipPath>
                                    <clipPath id='neckClip'>
                                        <rect x='383.873' y='110.561' width='32.254' height='253.636'/>
                                    </clipPath>
                                </defs>
                                <path id='notePath' fill='none' d='M438.102,368.318c0,0,3.357-68.318,45.062-82.958c3.995-1.402,11.503-4.043,11.503-4.043
	c26.977-13.359,44.659-32.345,40.3-62.132c-2.877-19.661-27.7-31.651-44.202-35.654c-0.898-0.218-1.802-0.426-2.678-0.72
	c-27.313-9.184-23.131-54.256-23.131-54.256'/>
                                <path id='notepath2' fill='none' d='M451.744,313.113c0.357,0,0.713,0.002,1.066,0.005c12.958,0.117,18.587-3.061,25.342,1.303
	c2.246,1.451,3.955,3.574,5.141,5.97c2.767,5.59,10.022,14.116,23.589,14.116c14.118,0,28.743-12.801,28.743-12.801
	s20.668-19.734,20.668-45.647c0-27.623-21.934-32.578-29.251-42.691c-7-9.674-6.302-22.796,1.761-31.603
	c10.034-10.959,29.372-21.235,29.372-50.272'/>
                                <line id='shadow' fill='none' stroke='#262626' strokeWidth='3' strokeMiterlimit='10'
                                      x1='243.336' y1='571.535' x2='556.664' y2='571.535'/>
                                <g id='guitar'>
                                    <circle id='circle' fill='none' stroke='#262626' strokeWidth='1'
                                            strokeMiterlimit='10' cx='400' cy='311.122'
                                            r='54.265'/>
                                    <path id='note' fill='#7683F3' d='M442.539,352.692c-0.792-0.541-1.595-1.458-2.107-2.098v-1.593c0-0.315-0.255-0.57-0.57-0.57
		c-0.315,0-0.57,0.255-0.57,0.57v14.054c-0.889-0.708-2.219-1.158-3.707-1.158c-2.676,0-4.846,1.456-4.846,3.253
		c0,1.796,2.17,3.253,4.846,3.253c2.676,0,4.846-1.456,4.846-3.253c0-0.129-0.012-0.256-0.034-0.382
		c0.021-0.059,0.034-0.122,0.034-0.188v-10.499c1.285,0.341,2.923,1.473,2.923,1.473c1.575,1.011,1.541,3.14,1.541,3.14
		C446.664,355.529,443.849,353.587,442.539,352.692z'/>
                                    <path id='note2' fill='#7683F3' d='M456.344,320.211l-0.002-0.063c0-0.025-0.001-0.049-0.003-0.074l-0.434-12.456
	c-0.032-0.928-0.981-1.539-1.839-1.183l-10.387,4.104c-0.516,0.214-0.844,0.729-0.819,1.287l0.363,9.807
	c-0.834-0.358-1.872-0.435-2.917-0.147c-2.083,0.575-3.401,2.384-2.943,4.042c0.457,1.658,2.517,2.535,4.599,1.961
	c1.833-0.506,3.072-1.968,3.032-3.441h0.001l-0.425-9.944c-0.021-0.501,0.275-0.961,0.739-1.151l8.193-3.344
	c0.437-0.178,0.918,0.134,0.933,0.606l0.303,7.501c-0.815-0.413-1.846-0.53-2.881-0.245c-1.968,0.543-3.193,2.327-2.736,3.985
	c0.457,1.658,2.424,2.561,4.392,2.018c1.684-0.465,2.82-1.837,2.828-3.262L456.344,320.211z'/>
                                    <rect id='neckBack' x='383.873' y='110.561' fill='#3656D8' width='32.254'
                                          height='253.636'/>
                                    <path id='bodyBack' fill='#FFFFFF' stroke='#262626' strokeWidth='3'
                                          strokeMiterlimit='10' d='M482.801,438.348
		c0,0-2.212-25.285-15.366-41.722c-8.79-10.983-13.654-24.717-12.351-38.724c0.604-6.5,2.996-13.226,5.656-19.364
		c1.425-3.289,2.217-6.817,2.422-10.396c0-30.705-16.613-55.597-63.163-55.597s-63.163,24.892-63.163,55.597
		c0.206,3.579,0.997,7.107,2.422,10.396c2.66,6.139,5.052,12.864,5.656,19.364c1.303,14.007-3.561,27.741-12.351,38.724
		c-13.154,16.437-15.366,41.722-15.366,41.722c-0.345,4.88-0.467,9.777-0.264,14.665c1.505,36.181,14.398,64.25,83.065,64.25
		c68.667,0,81.56-28.069,83.065-64.25C483.269,448.125,483.147,443.228,482.801,438.348z'/>
                                    <path id='bodyFront' fill='#FFFFFF' stroke='#262626' strokeWidth='3'
                                          strokeMiterlimit='10' d='M482.801,438.348
		c0,0-2.212-25.285-15.366-41.722c-8.79-10.983-13.654-24.717-12.351-38.724c0.604-6.5,2.996-13.226,5.656-19.364
		c1.425-3.289,2.217-6.817,2.422-10.396c0-30.705-16.613-55.597-63.163-55.597s-63.163,24.892-63.163,55.597
		c0.206,3.579,0.997,7.107,2.422,10.396c2.66,6.139,5.052,12.864,5.656,19.364c1.303,14.007-3.561,27.741-12.351,38.724
		c-13.154,16.437-15.366,41.722-15.366,41.722c-0.345,4.88-0.467,9.777-0.264,14.665c1.505,36.181,14.398,64.25,83.065,64.25
		c68.667,0,81.56-28.069,83.065-64.25C483.269,448.125,483.147,443.228,482.801,438.348z'/>
                                    <rect id='neck' x='383.873' y='110.561' fill='#7683F3' width='32.254'
                                          height='253.636'/>
                                    <g id='neckClipGroup' clipPath='url(#neckClip)'>
                                        <g id='highLightGroup'>
                                            <polygon id='neckHighlight2' opacity='0.2' fill='#EBEBEB' points='416.127,300.785 383.873,288.391
			383.873,267.989 416.127,282.227 416.127,300.785'/>
                                            <polygon id='neckHighlightMorph2' opacity='0.2' fill='none' points='416.127,288.391
			383.873,300.785 383.873,282.227 416.127,267.989 416.127,300.785'/>
                                            <polygon id='neckHighlight1' opacity='0.3' fill='#EBEBEB' points='416.127,210.785 383.873,198.391
			383.873,177.989 416.127,192.227 416.127,210.785'/>
                                            <polygon id='neckHighlightMoprh1' opacity='0.3' fill='none' points='416.127,198.391
			383.873,210.785 383.873,192.227 416.127,177.989 416.127,210.785'/>
                                        </g>
                                    </g>
                                    <circle id='soundhole' fill='#FFFFFF' stroke='#262626' strokeWidth='3'
                                            strokeMiterlimit='10' cx='400' cy='371.122' r='24.182'/>
                                    <g id='holeClipGroup' clipPath='url(#holeClip)'>
                                        <circle fill='#CFCFCF' cx='400' cy='371.122' r='24.182'/>
                                        <circle id='holeLight' fill='#EBEBEB' cx='390.185' cy='381.466' r='16.817'/>
                                    </g>
                                    <path id='bridge' fill='none' stroke='#262626' strokeWidth='3'
                                          strokeMiterlimit='10' d='M429.283,458.802h-58.567
		c-1.357,0-2.458-1.1-2.458-2.458v-5.543c0-1.358,1.1-2.458,2.458-2.458h58.567c1.357,0,2.458,1.1,2.458,2.458v5.543
		C431.741,457.702,430.641,458.802,429.283,458.802z'/>
                                    <path id='bridge' fill='none' stroke='#262626' strokeWidth='3'
                                          strokeMiterlimit='10' d='M429.283,458.802h-58.567
		c-1.357,0-2.458-1.1-2.458-2.458v-5.543c0-1.358,1.1-2.458,2.458-2.458h58.567c1.357,0,2.458,1.1,2.458,2.458v5.543
		C431.741,457.702,430.641,458.802,429.283,458.802z'/>
                                    <path id='headStockBack' fill='#262626' stroke='#262626' strokeWidth='3'
                                          strokeMiterlimit='10' d='M409.322,113.411h-18.645
		c-4.839,0-8.762-3.923-8.762-8.762V60.105c0-4.839,3.923-8.762,8.762-8.762h18.645c4.839,0,8.762,3.923,8.762,8.762v44.544
		C418.085,109.488,414.162,113.411,409.322,113.411z'/>
                                    <path id='headStock' fill='#FFFFFF' stroke='#262626' strokeWidth='3'
                                          strokeMiterlimit='10' d='M409.322,113.411h-18.645
		c-4.839,0-8.762-3.923-8.762-8.762V60.105c0-4.839,3.923-8.762,8.762-8.762h18.645c4.839,0,8.762,3.923,8.762,8.762v44.544
		C418.085,109.488,414.162,113.411,409.322,113.411z'/>
                                    <g id='strings'>
                                        <line fill='none' stroke='#3656D8' strokeWidth='2' strokeMiterlimit='10'
                                              x1='386.217' y1='103.66' x2='386.217'
                                              y2='458.802'/>
                                        <line fill='none' stroke='#3656D8' strokeWidth='2' strokeMiterlimit='10'
                                              x1='391.217' y1='86.66' x2='391.217' y2='458.802'/>
                                        <line fill='none' stroke='#3656D8' strokeWidth='2' strokeMiterlimit='10'
                                              x1='396.93' y1='73.513' x2='396.93' y2='458.802'/>
                                        <line fill='none' stroke='#3656D8' strokeWidth='2' strokeMiterlimit='10'
                                              x1='403.07' y1='73.513' x2='403.07' y2='458.802'/>
                                        <line fill='none' stroke='#3656D8' strokeWidth='2' strokeMiterlimit='10'
                                              x1='408.783' y1='86.66' x2='408.783' y2='458.802'/>
                                        <line fill='none' stroke='#3656D8' strokeWidth='2' strokeMiterlimit='10'
                                              x1='413.783' y1='103.66' x2='413.783' y2='458.802'/>
                                    </g>
                                </g>

                            </svg>
                        </div>
                        <div className='text-container col-md-6 col-sm-12 mb-sm-4 align-self-center'>
                            <h1 className='error-page-h1'>404</h1>
                            <h2 className='error-page-h2'>UH OH! You're lost.</h2>
                            <p>The page you are looking for does not exist.
                                How you got here is a mystery. But you can click the button below
                                to go back to the homepage.
                            </p>
                            <Link to='/'>
                                <button className='error-button btn green'>
                                    HOME
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageNotFound;