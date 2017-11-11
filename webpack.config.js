var path = require('path');
var webpack = require('webpack');


module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        './src/client/app.js'
        // bootstrap: bootstrapEntryPoints.dev
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        hot: true,
        port: 8000,
        open: true
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader?sourceMap']
            },
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/, './src/server/'],
                use: "babel-loader"
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader?name=[name].[ext]&outputPath=images/'
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
