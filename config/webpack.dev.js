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

    devtool: 'source-map',

    resolve: {
        extensions: [".ts", ".js", ".html"],
        modules: ["node_modules"]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    "ts-loader",
                    "angular2-template-loader"
                ],
                exclude: /node_modules/
            }
        ]
    },

    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        contentBase: "/dist/jit",
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
            ignored: /node_modules/
        }
    }
});

