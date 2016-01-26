'use strict';

const path = require('path');

const PATHS = {
    app: [path.join(__dirname, 'source/js/entry'), 'file?name=index.html!jade-html!' + path.join(__dirname, 'source/index.jade')],
    build: path.join(__dirname, 'dist')
},
    autoprefixer = require('autoprefixer'),
    precss       = require('precss');

module.exports = {
    entry: PATHS.app,
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    postcss: function(){
        return [autoprefixer, precss];
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: "style!css!postcss-loader!sass"
            }
        ]
    }
};