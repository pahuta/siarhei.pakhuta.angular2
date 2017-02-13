var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig('development'), {
    devtool: 'source-map',

    /*loaders: [
        {
            test: /\.ts$/,
            loader: 'ts-loader',
            query: {
                configFileName: 'tsconfig.json'
            }
        }
    ]*/
});

