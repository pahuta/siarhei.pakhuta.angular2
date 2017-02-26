var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');
var webpack = require('webpack');
var CompressionPlugin = require("compression-webpack-plugin");
var helper = require('./helper');

module.exports = webpackMerge(commonConfig('production'), {
    entry: {
        'app': './dist/unbundled-aot/src/main.aot.js'
    },

    output: {
        path: helper.rootPath("/dist/aot"),
        filename: "[name].js"
    },

    profile: true,
    devtool: false,

    resolve: {
        extensions: [".js", ".html"],
        modules: ["node_modules"]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
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
        })
    ],

    node: {
        __filename: true
    }
});

