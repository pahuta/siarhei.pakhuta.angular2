var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');

var AotPlugin = require('@ngtools/webpack').AotPlugin;

module.exports = webpackMerge(commonConfig('production'), {
    /*loaders: [
        {
            test: /\.ts$/,
            loader: '@ngtools/webpack'
        }
    ],

    plugins: [
        new AotPlugin({
            tsConfigPath: 'tsconfig-prod.json',
            entryModule: 'src/app/app.module#AppModule'
        })
    ]*/
});

