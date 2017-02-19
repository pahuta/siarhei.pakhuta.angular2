var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');

var AotPlugin = require('@ngtools/webpack').AotPlugin;

module.exports = webpackMerge(commonConfig('production'), {
    entry: {
        app: './src/main-aot.ts'
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: '@ngtools/webpack'
            }
        ]
    },

    plugins: [
        new AotPlugin({
            tsConfigPath: './tsconfig-prod.json',
            entryModule: './src/app/app.module.ts#AppModule',
            skipCodeGeneration: true,
            typeChecking: false
        })
    ]
});

