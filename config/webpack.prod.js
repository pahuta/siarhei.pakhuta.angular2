var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');
var webpack = require('webpack');
var CompressionPlugin = require("compression-webpack-plugin");
var helper = require('./helper');

var AotPlugin = require('@ngtools/webpack').AotPlugin;

module.exports = webpackMerge(commonConfig('production'), {
    entry: {
        // 'app': './dist/unbundled-aot/src/main.aot.js'
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

    // skipCodeGeneration: true,


    plugins: [
        new AotPlugin({
            tsConfigPath: './tsconfig.aot.json',
            // entryModule: './src/app/app.module.ts#AppModule'
            entryModule: helper.rootPath("/src/app/") + "app.module#AppModule",
            typeChecking: false
        }),

        /*new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: false
        }),

        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })*/
    ],

    node: {
        __filename: true
    }
});

