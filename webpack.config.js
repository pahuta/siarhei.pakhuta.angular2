const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/main.ts'
    },

    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        library: '[name]'
    },

    resolve: {
        extensions: ['', '.js', '.ts', '.html'],
        modulesDirectories: ['node_modules']
    },

    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!resolve-url!sass?sourceMap')
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },

    devtool: 'source-map',

    devServer: {
        port: 3000,
        host: 'localhost',
        historyApiFallback: true,
        contentBase: '/src',
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        outputPath: __dirname + '/dist'
    },

    tslint: {
        configFile: 'tslint.json'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency',
            inject: 'body'
        }),

        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ]
};