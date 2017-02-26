var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');
var webpack = require('webpack');
var helper = require('./helper');
var AotPlugin = require('@ngtools/webpack').AotPlugin;

module.exports = webpackMerge(commonConfig('production'), {
    entry: {
        app: './src/main.aot.ts'
    },

    output: {
        path: helper.rootPath("/dist/aot"),
        filename: "[name].js"
    },

    profile: true,
    devtool: false,

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    "@ngtools/webpack"
                ]
            }
        ]
    },

    plugins: [
        new AotPlugin({
            tsConfigPath: './tsconfig.aot.json',
            entryModule: helper.rootPath("/src/app/") + "app.module#AppModule",
            typeChecking: false
        }),

        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                keep_fnames: true
            },
            compress: {
                warnings: false
            },
            comments: false,
            sourceMap: false
        })
    ],

    node: {
        __filename: true
    }
});

