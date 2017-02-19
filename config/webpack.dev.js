var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig('development'), {
    entry: {
        app: './src/main.ts'
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts-loader', 'angular2-template-loader']
                // loaders: ['ts-loader', 'angular2-template-loader?keepUrl=true']
            }
        ]
    }
});

