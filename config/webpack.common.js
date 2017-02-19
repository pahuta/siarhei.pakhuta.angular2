'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(ENV) {
    return {
        /*entry: {
            app: './src/main.ts'
        },*/

        output: {
            path: './dist',
            publicPath: '/',
            filename: '[name].js',
            library: '[name]'
        },

        resolve: {
            extensions: ['', '.js', '.ts', '.html'],
            modulesDirectories: ['node_modules']
        },

        module: {
            /*preLoaders: [
                {
                    test: /\.ts$/,
                    loader: 'tslint-loader'
                }
            ],*/
            loaders: [
                /*{
                    test: /\.ts$/,
                    // loaders: ['ts-loader', 'angular2-template-loader'],
                    loaders: ['ts-loader'],
                    // query: {
                    //     configFileName: 'tsconfig-prod.json'
                    // }

                },*/
                // {
                //     test: /\.scss$/,
                //     loader: ExtractTextPlugin.extract('style', 'css!sass?sourceMap')
                // },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.(jpg|png)$/,
                    loader: 'file?name=[path][name].[ext]'
                }
            ]
        },

        devServer: {
            port: 3000,
            host: 'localhost',
            historyApiFallback: true,
            contentBase: '/src',
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            },
            outputPath: './dist'
        },

        tslint: {
            configFile: 'tslint.json'
        },

        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'ENV': JSON.stringify(ENV)
                }
            }),

            new HtmlWebpackPlugin({
                template: 'src/index.html',
                chunksSortMode: 'dependency',
                inject: 'body'
            }),

            new ExtractTextPlugin('style.css', {
                allChunks: true
            }),

            new CopyWebpackPlugin([
                {
                    from: 'src/mock',
                    to: 'mock'
                },
                {
                    from: 'src/assets',
                    to: 'assets'
                }
            ])
        ]
    };
};
