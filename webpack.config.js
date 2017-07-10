var webpack = require("webpack");
var fs = require("fs");
var path = require("path");
var distDir = path.join(__dirname, "dist");

module.exports = [
    {
        entry: "./src/fpb.js",
        output: {
            path: distDir,
            filename: "fpb.js",
            library: "fpb",
            libraryTarget: "umd",
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }
            ]
        }
    }]
