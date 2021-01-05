module.exports = (env) => {
	const isProduction = env === 'production';
	return {
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader'
					}
				},
				{
					test: /\.css$/i,
					use: ['style-loader', 'css-loader']
				},
				{
					test: /\.scss$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'style-loader'
						},
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				},
				{
					test: /\.(png|jp(e*)g|svg|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: 'images/[hash]-[name].[ext]'
							}
						}
					]
				}
			]
		},
		devtool: isProduction ? false : 'source-map'
	};
};
