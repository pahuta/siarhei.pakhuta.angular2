var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');
var helper = require('./helper');

module.exports = webpackMerge(commonConfig('development'), {
    entry: {
        app: './src/main.ts'
    },

    output: {
        path: helper.rootPath("/dist/test"),
        publicPath: "/",
        filename: "[name].js"
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    "ts-loader",
                    "angular2-template-loader"
                ],
                exclude: [/node_modules/]
            },
            {
                enforce: 'post',
                test: /\.ts$/,
                loader: 'istanbul-instrumenter-loader',
                exclude: [
                    /\.(e2e|spec)\.ts$/,
                    /node_modules/
                ]
            }
        ]
    },

    node: {
        global: true,
        process: false,
        crypto: 'empty',
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
});

