"use strict";

var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var helper = require('./helper');

module.exports = function(ENV) {
    return {
        resolve: {
            extensions: [".ts", ".js", ".html"],
            modules: ["node_modules"]
        },

        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.ts$/,
                    use: [
                        "tslint-loader"
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        "raw-loader",
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                {
                    test: /\.html$/,
                    use: [
                        "html-loader"
                    ]
                },
                {
                    test: /\.(jpg|png)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[path][name].[ext]"
                            }
                        }
                    ]
                }
            ]
        },

        plugins: [
            new webpack.ContextReplacementPlugin(
                /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
                helper.rootPath("/src"),
                {}
            ),

            new webpack.DefinePlugin({
                "process.env": {
                    "ENV": JSON.stringify(ENV)
                }
            }),

            new HtmlWebpackPlugin({
                template: "src/index.html",
                chunksSortMode: "dependency",
                inject: "body"
            }),

            new CopyWebpackPlugin([
                {
                    from: "src/mock",
                    to: "mock"
                },
                {
                    from: "src/assets",
                    to: "assets"
                }
            ])
        ]
    };
};
