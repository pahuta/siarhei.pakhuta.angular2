var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig('development'), {
    entry: {
        app: './src/main.ts'
    },

    devtool: 'source-map',

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
        contentBase: "/dist",
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
            ignored: /node_modules/
        }
    }
});

