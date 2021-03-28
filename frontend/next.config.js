module.exports = {
	distDir: 'build',

	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://macrobros-api:8000/api/:path*' // Proxy to Backend
			}
		];
	}
};
