const webpack = require('webpack');

module.exports = {

    entry: './src/index.js',

    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },

    devServer: {
        port: 3000,
        contentBase: './public'
    },

    module: {
        rules: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    }
}