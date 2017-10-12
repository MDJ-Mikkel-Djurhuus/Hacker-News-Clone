const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
    entry: [
        'babel-polyfill',
        './src/main.js',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                          sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                          sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['transform-runtime'],
                        presets: ['es2015'],
                    }
                }
            }]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Hacker News Clone',
            template: path.resolve(__dirname, "src/index.ejs"), // Load a custom template (ejs by default see the FAQ for details)
        })
    ]
};

module.exports = config;