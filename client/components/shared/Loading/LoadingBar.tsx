import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';

interface LoadingBarProps {
	color;
	startPosition;
	stopDelayMs;
	options?;
	height;
}

class LoadingBar extends React.Component<LoadingBarProps> {
	static defaultProps = {
		color: '#3182CE',
		startPosition: 0.4,
		stopDelayMs: 300,
		height: 1.25
	};

	timer;

	routeChangeStart = () => {
		NProgress.set(this.props.startPosition);
		NProgress.start();
	};

	routeChangeEnd = () => {
		clearTimeout(this.timer);
		this.timer = setTimeout(() => {
			NProgress.done(true);
		}, this.props.stopDelayMs);
	};

	componentDidMount() {
		const { options } = this.props;

		if (options) {
			NProgress.configure(options);
		}

		Router.events.on('routeChangeStart', this.routeChangeStart);
		Router.events.on('routeChangeComplete', this.routeChangeEnd);
		Router.events.on('routeChangeError', this.routeChangeEnd);
	}

	render() {
		const { color, height } = this.props;

		return (
			<style jsx global>{`
				#nprogress {
					pointer-events: none;
				}
				#nprogress .bar {
					background: ${color};
					position: fixed;
					z-index: 9999;
					top: 0;
					left: 0;
					width: 100%;
					height: ${height}px;
				}
				#nprogress .peg {
					display: block;
					position: absolute;
					right: 0px;
					width: 100px;
					height: 100%;
					box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
					opacity: 1;
					-webkit-transform: rotate(3deg) translate(0px, -4px);
					-ms-transform: rotate(3deg) translate(0px, -4px);
					transform: rotate(3deg) translate(0px, -4px);
				}
				.nprogress-custom-parent {
					overflow: hidden;
					position: relative;
				}
				.nprogress-custom-parent #nprogress .bar {
					position: absolute;
				}
			`}</style>
		);
	}
}

export default LoadingBar;
