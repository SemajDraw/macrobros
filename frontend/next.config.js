module.exports = {
	distDir: 'build',
	future: {
		webpack5: true
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://macrobros-api:8000/api/:path*' // Proxy to Backend
			}
		];
	}
};
