var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig('development'), {
    entry: {
        app: './src/main.ts'
    },

    devtool: 'source-map',

    loaders: [
        {
            test: /\.ts$/,
            loaders: ['ts-loader']
        }
    ]
});

