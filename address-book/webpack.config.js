var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: './app.ts',
    target: 'node',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'addressBook.js'
    },
    externals: nodeModules,
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new webpack.IgnorePlugin(/\.(css|less)$/),
        new webpack.BannerPlugin('require("source-map-support").install();',
            { raw: true, entryOnly: false })
    ],
    devtool: 'sourcemap'
};