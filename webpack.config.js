const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],

    module: {
        rules: [
            
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
            },

            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development'
                        }
                    },
                    'css-loader'
                ]
            }

        ]
    }
}