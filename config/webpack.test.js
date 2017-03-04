var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');
var helper = require('./helper');

module.exports = webpackMerge(commonConfig('development'), {
    entry: {
        app: './src/main.ts'
    },

    output: {
        path: helper.rootPath("/dist/jit"),
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
                // exclude: [/\.spec\.ts$/]
                // exclude: [/\.spec\.ts$/, /node_modules/]
                exclude: [/node_modules/]
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

